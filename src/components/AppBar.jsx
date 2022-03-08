import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { GET_CURRENT_USER } from "../graphql/queries";
import { useSignOut } from "../hooks/useSignOut";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.background,
    color: theme.colors.textPrimary,
  },
});

const AppBarTab = ({ children, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      <Text fontWeight="bold" fontSize={"subheading"} color="textSecondary">
        {children}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER);
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
        }}
      >
        <AppBarTab to="/">Repositories</AppBarTab>
        {data?.me ? (
          <>
            <AppBarTab to="/newReview">Create a review</AppBarTab>
            <AppBarTab onPress={signOut} to="/signin">
              Sign Out
            </AppBarTab>
          </>
        ) : (
          <AppBarTab to="/signin">Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
