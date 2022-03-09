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

const useRepositories = (sortBy) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: sortByOptions[sortBy],
  });

  return { repositories: data?.repositories, loading, refetch, error };
};

export default useRepositories;
