import { Channel, MessageList, MessageInput } from "stream-chat-expo";
import { useAppContext } from "../components/AppContext";

const ChannelScreen = (props) => {
  const { navigation } = props;
  const { channel, setThread } = useAppContext();
  if (!channel) return null;

  console.log("ChannelScreen", channel);

  return (
    <Channel channel={channel}>
      <MessageList
        onThreadSelect={(thread) => {
          if (channel?.id) {
            setThread(thread);
            navigation.navigate("ThreadScreen");
          }
        }}
      />
      <MessageInput />
    </Channel>
  );
};
export default ChannelScreen;
