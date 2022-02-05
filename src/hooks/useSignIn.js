// graphql react hook for signin mutation
import { useApolloClient, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { SIGNIN_MUTATION } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGNIN_MUTATION);
  const navigate = useNavigate();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
      onCompleted: async (data) => {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        navigate("/", { replace: true });
        client.resetStore();
      },
    });
  };

  return [signIn, result];
};
