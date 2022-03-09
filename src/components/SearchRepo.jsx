import React from "react";
import { StyleSheet, View } from "react-native";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  search: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
});

const SearchRepo = ({ value, setValue }) => {
  return (
    <View>
      <TextInput
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.search}
        placeholder="search"
      />
    </View>
  );
};

export default SearchRepo;
