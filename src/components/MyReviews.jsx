import React from "react";
import { FlatList, Text } from "react-native";
import useMe from "../hooks/useMe";
import ReviewItem from "./ReviewItem.jsx";

const MyReviews = () => {
  const { data, loading } = useMe(true);

  if (!data || loading) {
    <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={data?.me.reviews.edges}
      renderItem={({ item }) => <ReviewItem key={item.id} review={item} />}
      keyExtractor={({ node }) => node.id}
    />
  );
};

export default MyReviews;
