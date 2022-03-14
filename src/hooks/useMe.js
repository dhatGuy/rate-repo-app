import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";

const useMe = (includeReviews = false) => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews,
    },
  });

  return {
    data,
    loading,
    refetch,
  };
};

export default useMe;
