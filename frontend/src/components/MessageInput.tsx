import { UserContext } from 'context/user';
import React, { useContext, useState } from 'react';
import 'styles/MessageInput.css';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const user = useContext(UserContext)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    onSend(message);
    setMessage('');
  };

  return (
    <div className="message-input-container">
      <div className='message-input-username'>{user.user?.name}:</div>
      <form className="message-input" onSubmit={handleSend}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageInput;