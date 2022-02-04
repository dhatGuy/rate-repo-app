import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
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

const AppBarTab = ({ children, to }) => {
  return (
    <Link to={to}>
      <Text fontWeight="bold" fontSize={"subheading"} color="textSecondary">
        {children}
      </Text>
    </Link>
  );
};

const AppBar = () => {
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
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
