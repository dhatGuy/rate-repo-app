import { useMutation } from "@apollo/client";
import { DELETE_REVIEW_MUTATION } from "../graphql/mutations";

const useDeleteReview = (id) => {
  const [mutate, { loading, data }] = useMutation(DELETE_REVIEW_MUTATION);

  const deleteReview = async () => {
    await mutate({
      variables: {
        id,
      },
    });
  };

  return {
    deleteReview,
    data,
    loading,
  };
};

export default useDeleteReview;
