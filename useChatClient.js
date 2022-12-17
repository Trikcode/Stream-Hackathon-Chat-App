import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  chatApiKey,
  chatChannelId,
  chatUserName,
  chatUserToken,
} from "./chartConfig";

const user = {
  id: chatUserName,
  name: chatUserName,
};

const chatClient = StreamChat.getInstance(chatApiKey);

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setUpUser = async () => {
      try {
        await chatClient.connectUser(user, chatUserToken);
        setClientIsReady(true);

        const channel = chatClient.channel("worldcup", "general", {
          name: "General",
          image: "https://bit.ly/2u9Vc0r",
          members: [
            "snowy-bonus-4",
            "snowy-bonus-5",
            "snowy-bonus-6",
            "snowy-bonus-7",
            "snowy-bonus-8",
            "snowy-bonus-9",
            "snowy-bonus-10",
          ],
        });
        channel.watch();
        channel.sendMessage({
          text: "Hello world",
        });
        channel.on("message.new", (event) => {
          console.log(event);
        });
      } catch (error) {
        console.log(error);
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
