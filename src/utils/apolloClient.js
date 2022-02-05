import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.APOLLO_URI,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
