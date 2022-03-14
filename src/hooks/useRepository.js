import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: {
      id,
      first: 2,
    },
    fetchPolicy: "cache-and-network",
  });

  const loadMoreReviews = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        id,
        first: 2,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    data,
    loading,
    fetchMore: loadMoreReviews,
  };
};

export default useRepository;
