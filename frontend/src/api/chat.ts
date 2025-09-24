import axios from "axios";

export type Chat = {
  token: string;
  baseUrl: string;
  url: string;
};

export async function getChat(username: string, group: string): Promise<Chat> {
  return axios.post("/api/chat/token", {
    username,
    group
  }).then((res) => res.data as Chat);
}