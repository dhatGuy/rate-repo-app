import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const sortByOptions = {
  createdAt: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  highRate: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  lowRate: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const useRepositories = (sortBy = "createdAt", searchKeyword, first = 0) => {
  const variables = {
    ...sortByOptions[sortBy],
    searchKeyword,
    first,
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    result,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
