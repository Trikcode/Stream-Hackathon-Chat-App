import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { default as theme } from "./assets/custom-theme.json";
import ChatScreen from "./ChatScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ChatScreen />
        </Layout>
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
};
export default HomeScreen;
