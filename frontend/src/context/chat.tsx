import { getChat, type Chat } from "api/chat";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user";

export const ChatContext = createContext<{ chat: Chat | null, loading: boolean }>({ chat: null, loading: true });

export const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext.loading || !userContext.user) return;
    getChat(userContext.user.name, "chatroom").then((chat) => {
      setChat(chat);
      setLoading(false);
    });
  }, [userContext]);

  return (
    <ChatContext.Provider value={{ loading, chat }}>
      {children}
    </ChatContext.Provider>
  );
}