import React, { useEffect, useRef } from 'react';
import Message from './Message';
import 'styles/MessageList.css';

interface Message {
  id?: string;
  user: string;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="message-list" ref={listRef}>
      {messages.map((msg) => (
        <Message key={msg.id} user={msg.user} text={msg.text} />
      ))}
    </div>
  );
};

export default MessageList;