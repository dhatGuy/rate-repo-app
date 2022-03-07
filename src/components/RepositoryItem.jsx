import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";
import Text from "./Text";

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
});

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}) => {
  const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate(`/repository/${id}`, { replace: true })}>
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
            <Text color="white" style={styles.language}>
              {language}
            </Text>
          </View>
        </View>
        <RepositoryStats
          {...{ stargazersCount, forksCount, reviewCount, ratingAverage }}
        />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
