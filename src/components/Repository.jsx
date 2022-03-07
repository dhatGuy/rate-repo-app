import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList, View } from "react-native";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const Repository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data.repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem key={item.id} review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={data.repository} />
      )}
      // ...
    />
  );
};

export default Repository;
