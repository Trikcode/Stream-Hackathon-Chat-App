import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  chatApiKey,
  chatChannelId,
  chatUserId,
  chatUserName,
  chatUserToken,
} from "../config/chatConfig";

const user = {
  id: chatUserId,
  name: chatUserName,
};

const chatClient = StreamChat.getInstance(chatApiKey);

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setUpUser = async () => {
      try {
        await chatClient.connectUser(user, chatClient.devToken(chatUserId));
        setClientIsReady(true);
        // const channel = chatClient.channel("messaging", "global", {
        //   name: "Global",
        //   image: "https://getstream.io/random_svg/?id=global-channel-icon",
        // });
        // await channel.watch();
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `An error occurred while connecting the user: ${error.message}`
          );
        }
      }
    };

    if (!chatClient.userID) {
      setUpUser();
    } else {
      setClientIsReady(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, []);
  return { chatClient, clientIsReady };
};
