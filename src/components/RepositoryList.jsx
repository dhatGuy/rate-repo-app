import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import FilterRepository from "./FilterRepository";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return <RepositoryItem key={item.id} {...item} />;
      }}
    />
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  const { repositories } = useRepositories(sortBy);

  return (
    <>
      <FilterRepository sortBy={sortBy} setSortBy={setSortBy} />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;
