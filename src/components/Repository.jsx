import React from "react";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";

const Repository = () => {
  const { id } = useParams();
  const { loading, data, fetchMore } = useRepository(id);

  // if (loading || !data) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  return (
    <FlatList
      data={data?.repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem key={item.id} review={item} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={data.repository} />
      )}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Repository;
