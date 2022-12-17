import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { default as theme } from "../assets/custom-theme.json";

const HomeScreen = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout>
        <Text>Home Screen</Text>
      </Layout>
    </ApplicationProvider>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
