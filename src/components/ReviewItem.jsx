import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  rating: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: theme.colors.background,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  username: {
    fontWeight: "900",
    fontSize: 20,
  },
  date: {
    opacity: 0.5,
    color: theme.colors.textSecondary,
    paddingBottom: 10,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text>{review.node.rating}</Text>
      </View>
      <View>
        <Text style={styles.username}>{review.node.user.username}</Text>
        <Text>{review.node.createdAt}</Text>
        <Text>{review.node.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
