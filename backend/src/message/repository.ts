import { randomUUID } from "crypto";

export type Message = {
  id: string;
  user: string;
  text: string;
}

const messages: Message[] = [
  { id: randomUUID().toString(), user: 'Alice', text: 'Hello!' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Hi Alice!' },
  { id: randomUUID().toString(), user: 'Alice', text: 'How are you?' },
  { id: randomUUID().toString(), user: 'Bob', text: 'I am good, thanks! And you?' },
  { id: randomUUID().toString(), user: 'Alice', text: 'I am great! What are you up to today?' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Just working on some code.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Same here. I have a lot of work to do.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Do you want to grab coffee later?' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Sure, that sounds good!' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Let me know when you are free.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'How about after 3pm?' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Works for me.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'See you then!' },
  { id: randomUUID().toString(), user: 'Bob', text: 'See you!' },
  { id: randomUUID().toString(), user: 'Alice', text: 'By the way, did you finish the report?' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Almost. I just need to add a few more details.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Let me know if you need help.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Thanks, I will!' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Here is a really long message to test how the chat handles longer texts. Sometimes, users might want to send a lot of information in a single message, so it is important that the chat UI can gracefully handle wrapping and displaying long messages without breaking the layout or causing scroll issues.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'That is a good point. I will make sure to test with even longer messages as well.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Here is another long message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Short one.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Another short.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Testing, testing, 1, 2, 3.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'The quick brown fox jumps over the lazy dog.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Pack my box with five dozen liquor jugs.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'How many messages do we have now?' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Almost thirty!' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Let’s keep going.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Alright, here is another message.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'And another one.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'We are getting close to 50.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Just a few more.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Here is a message with a lot of emojis! 😀😁😂🤣😃😄😅😆😉😊😋😎😍😘' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Emojis are fun! 🎉🎉🎉' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Let’s see how the chat handles special characters: @#$%^&*()_+-=~`' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Special characters should work fine.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Here is a really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long message!' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Wow, that is long!' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Almost there.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Message 41.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Message 42.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Message 43.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Message 44.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Message 45.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Message 46.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Message 47.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Message 48.' },
  { id: randomUUID().toString(), user: 'Alice', text: 'Message 49.' },
  { id: randomUUID().toString(), user: 'Bob', text: 'Message 50. This is the last message in the initial mock data. It is a bit longer to test the chat UI with a longer ending message.' },
]

export async function getMessages() {
  return messages;
}

export async function addMessage(user: string, text: string) {
  const newMessage: Message = {
    id: randomUUID().toString(),
    user,
    text
  };
  messages.push(newMessage);
  return newMessage;
}