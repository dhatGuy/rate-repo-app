import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useDebounce from "../hooks/useDebounce";
import useRepositories from "../hooks/useRepositories";
import RepoListHeader from "./RepoListHeader";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

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
  loading,
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
      renderItem={({ item }) => {
        if (loading) {
          return <Text>loading...</Text>;
        }
        return <RepositoryItem key={item.id} {...item} />;
      }}
      ListHeaderComponent={
        <RepoListHeader
          setText={setSearchKeyword}
          searchText={searchKeyword}
          sortBy={sortBy}
          setSortBy={setSortBy}
          loading={loading}
        />
      }
    />
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500);
  const { repositories, loading } = useRepositories(
    sortBy,
    debouncedSearchKeyword
  );

  return (
    <>
      <RepositoryListContainer
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        sortBy={sortBy}
        setSortBy={setSortBy}
        repositories={repositories}
        loading={loading}
      />
    </>
  );
};

export default RepositoryList;
