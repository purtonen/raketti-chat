import { useContext, useEffect, useState } from "react";
import { SendMessageError, WebPubSubClient, type OnGroupDataMessageArgs } from "@azure/web-pubsub-client";
import { ChatContext } from "context/chat";
import { UserContext } from "context/user";

// Specifies the group
const groupName = "chatroom";

export type Message = {
  id?: string;
  user: string;
  text: string;
}

export async function getmessages(): Promise<Message[]> {
  return fetch("/api/messages").then((res) => res.json() as Promise<Message[]>);
}

export async function sendMessage(message: Message): Promise<Message> {
  return fetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  }).then((res) => res.json() as Promise<Message>);
}

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [initializingClient, setInitializingClient] = useState<boolean>(true);
  const [hydrating, setHydrating] = useState<boolean>(true);
  const [client, setClient] = useState<WebPubSubClient | null>(null);
  const userContext = useContext(UserContext);
  const chat = useContext(ChatContext)
  const loading = initializingClient || hydrating;

  useEffect(function hydrateMessages() {
    if (chat.loading || !chat.chat) return;
    console.log("Fetching messages from server...");
    getmessages().then((msgs) => {
      console.log("Fetched messages: ", msgs);
      setMessages(msgs);
      setHydrating(false);
    });
  }, [chat]);

  useEffect(function setupWebPubSubClient() {
    if (chat.loading || !chat.chat) return;
    const client = new WebPubSubClient(chat.chat.url)
    client.start();
    // Join the group
    client.joinGroup(groupName).then(() => {
      console.log("Joined group successfully");
    }).then(() => {
      setInitializingClient(false);
    }).catch((e: SendMessageError) => {
      console.error("Failed to join group: ", e);
    });

    const onMessage = (e: OnGroupDataMessageArgs) => {
      console.log("Received message from server: ", e);
      const message: Message = {
        id: e.message.sequenceId!!.toString(),
        user: e.message.fromUserId,
        text: e.message.data as string,
      }
      setMessages((prev) => [...prev, message]);
    }

    // Receive a message from the server
    client.on("group-message", onMessage);

    setClient(client);

    // Clean up the event listener on unmount
    return () => {
      client.off("group-message", onMessage);
    }
  }, [chat]);

  const handleSendMessage = async (messageString: string) => {
    console.log("Sending message to server: ", messageString);
    const message = await sendMessage({ user: userContext.user?.name!!, text: messageString });
    setMessages((prev) => [...prev, message]);
    await client?.sendToGroup(groupName, messageString, "text", { noEcho: true, fireAndForget: false });
  };

  return { messages, loading, sendMessage: handleSendMessage };
}