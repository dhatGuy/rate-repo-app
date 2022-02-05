// graphql react hook for signin mutation
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

export const useSignOut = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return signOut;
};
