import * as Linking from "expo-linking";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
  },
  content: {
    flexDirection: "row",
    marginBottom: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  github: {
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 2,
    paddingVertical: 10,
    fontWeight: "bold",
    alignItems: "center",
  },
});

const RepositoryInfo = ({ repository }) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    url,
  } = repository;
  const openUrl = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{
            uri: ownerAvatarUrl,
          }}
        />
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text fontSize="subheading" fontWeight="bold">
            {fullName}
          </Text>
          <Text>{description}</Text>
          <View>
            <Text color="white" style={styles.language}>
              {language}
            </Text>
          </View>
        </View>
      </View>
      <RepositoryStats
        {...{ stargazersCount, forksCount, reviewCount, ratingAverage }}
      />
      <Pressable onPress={openUrl} style={styles.github}>
        <Text style={{ color: "white" }}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;
