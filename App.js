import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useChatClient } from "./helper/useChatClient";
import { OverlayProvider, Chat, LoadingIndicator } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import ChannelScreen from "./screens/ChannelScreen";
import HomeScreen from "./screens/Home";
import ChannelListScreen from "./screens/ChannelListScreen";
import ThreadScreen from "./screens/ThreadScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { AppProvider } from "./components/AppContext";

import { chatApiKey } from "./config/chatConfig";

const Stack = createStackNavigator();
const chatClient = StreamChat.getInstance(chatApiKey);

export default function App() {
  const { clientIsReady } = useChatClient();
  if (!clientIsReady) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <AppProvider>
      <NavigationStack />
    </AppProvider>
  );
}

const NavigationStack = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <Chat client={chatClient}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: true,
              }}
            >
              {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
              <Stack.Screen
                name="ChannelListScreen"
                component={ChannelListScreen}
              />
              <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
              <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </NavigationContainer>
        </Chat>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
