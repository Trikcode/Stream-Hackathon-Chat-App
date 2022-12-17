import React, { useCallback } from "react";
import { chatUserId, chatApiKey } from "../config/chatConfig";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChannelList } from "stream-chat-expo";
import { useAppContext } from "../components/AppContext";

const filters = {
  members: { $in: [chatUserId] },
  type: "messaging",
};
const sort = { last_message_at: -1 };
const additionalFlatListProps = {
  keyboardDismissMode: "on-drag",
  keyboardShouldPersistTaps: "always",
  getItemLayout: (data, index) => ({
    length: 100,
    offset: 100 * index,
    index,
  }),
};

const options = {
  presence: true,
  watch: true,
  state: true,
};
const styles = StyleSheet.create({
  channelListContainer: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  emptyIndicatorContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  emptyIndicatorText: { paddingTop: 28 },
  flex: {
    flex: 1,
  },
  searchContainer: {
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: "row",
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    includeFontPadding: false, // for android vertical text centering
    padding: 0, // removal of default text input padding on android
    paddingHorizontal: 10,
    paddingTop: 0, // removal of iOS top padding for weird centering
    textAlignVertical: "center", // for android vertical text centering
  },
});

const ChannelListScreen = (props) => {
  const { navigation } = props;
  const { setChannel } = useAppContext();

  return (
    <View style={styles.channelListContainer}>
      <ChannelList
        filters={filters}
        sort={sort}
        options={options}
        onSelect={(channel) => {
          setChannel(channel);
        }}
        additionalFlatListProps={additionalFlatListProps}
        styles={{
          container: styles.flex,
          emptyStateContainer: styles.emptyIndicatorContainer,
          emptyStateText: styles.emptyIndicatorText,
        }}
      />
    </View>
  );
};

export default ChannelListScreen;
