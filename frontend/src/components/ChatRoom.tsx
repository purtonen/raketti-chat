import React from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import 'styles/ChatRoom.css';
import { useMessages } from 'api/message';

const ChatRoom: React.FC = () => {
  const { messages, loading, sendMessage } = useMessages();

  return (
    <div className="chatroom-container">
      <h1>Chat Room</h1>
      {loading && <p>Loading messages...</p>}
      {!loading && <MessageList messages={messages} />}
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatRoom;