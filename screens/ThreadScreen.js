import { Thread, Channel } from "stream-chat-expo";

const ThreadScreen = (props) => {
  const { channel, thread } = useAppContext();
  return (
    <Channel channel={channel} thread={thread} threadList>
      <Thread />
    </Channel>
  );
};

export default ThreadScreen;
