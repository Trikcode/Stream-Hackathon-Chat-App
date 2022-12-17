import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { chatUserId } from "../config/chatConfig";
import { ChannelList, ChannelListPreview } from "stream-chat-expo";

const filters = {
  members: { $in: [chatUserId] },
};
const sort = { last_message_at: -1 };

const ChatScreen = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ChannelList filters={filters} sort={sort} Preview={ChannelListPreview} />
    </GestureHandlerRootView>
  );
};
export default ChatScreen;
