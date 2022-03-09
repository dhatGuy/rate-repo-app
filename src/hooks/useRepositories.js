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

const useRepositories = (sortBy = "createdAt", searchKeyword) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    variables: { ...sortByOptions[sortBy], searchKeyword },
  });

  return { repositories: data?.repositories, loading, refetch, error };
};

export default useRepositories;
