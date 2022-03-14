import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useDebounce from "../hooks/useDebounce";
import useRepositories from "../hooks/useRepositories";
import RepoListHeader from "./RepoListHeader";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  setSearchKeyword,
  setSortBy,
  sortBy,
  searchKeyword,
  onEndReach,
}) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.2}
      renderItem={({ item }) => {
        return <RepositoryItem key={item.id} {...item} />;
      }}
      ListHeaderComponent={
        <RepoListHeader
          setText={setSearchKeyword}
          searchText={searchKeyword}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      }
    />
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500);
  const { repositories, loading, fetchMore } = useRepositories(
    sortBy,
    debouncedSearchKeyword,
    8
  );

  const onEndReach = () => {
    if (!loading) {
      fetchMore();
    }
  };

  return (
    <>
      <RepositoryListContainer
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        sortBy={sortBy}
        setSortBy={setSortBy}
        repositories={repositories}
        onEndReach={onEndReach}
      />
    </>
  );
};

export default RepositoryList;
