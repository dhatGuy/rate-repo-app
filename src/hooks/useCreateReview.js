// graphql react hook for signin mutation
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { CREATE_REVIEW_MUTATION } from "../graphql/mutations";

export const useCreateReview = () => {
  const [mutate, { data, error }] = useMutation(CREATE_REVIEW_MUTATION);
  const navigate = useNavigate();

  const createReview = async (values) => {
    console.log(values);
    return await mutate({
      variables: {
        review: {
          rating: Number(values.rating),
          text: values.text,
          repositoryName: values.name,
          ownerName: values.owner,
        },
      },
      onCompleted: () => {
        navigate("/", { replace: true });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return [createReview, data, error];
};
