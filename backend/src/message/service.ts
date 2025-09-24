import { getMessages as repoGetMessages, addMessage as repoAddMessage } from "./repository";

export async function getMessages() {
  return repoGetMessages();
}

export async function addMessage(user: string, text: string) {
  return repoAddMessage(user, text);
}