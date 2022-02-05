// graphql react hook for signin mutation
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN_MUTATION);

  const signIn = async ({ username, password }) => {
    return mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
  };

  return [signIn, result];
};
