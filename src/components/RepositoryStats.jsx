import React from "react";
import { StyleSheet, View } from "react-native";
import { formatCounts } from "../utils";
import Text from "./Text";

const styles = StyleSheet.create({
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statsInfo: {
    alignItems: "center",
  },
});

const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.stats}>
      <View style={styles.statsInfo}>
        <Text fontWeight={"bold"}>{formatCounts(stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statsInfo}>
        <Text fontWeight={"bold"}>{formatCounts(forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statsInfo}>
        <Text fontWeight={"bold"}>{reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.statsInfo}>
        <Text fontWeight={"bold"}>{ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryStats;
