import Constants from "expo-constants";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.background,
    color: theme.colors.textPrimary,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text fontWeight="bold" fontSize={"subheading"} color="textSecondary">
        {children}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;
