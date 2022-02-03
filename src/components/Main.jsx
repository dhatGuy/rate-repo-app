import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={style.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
