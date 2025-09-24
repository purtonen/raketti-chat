import { UserContext } from 'context/user';
import React, { useContext } from 'react';
import 'styles/Message.css';

type MessageProps = {
  user: string;
  text: string;
};

const Message: React.FC<MessageProps> = ({ user, text }) => {
  const userContext = useContext(UserContext);
  return (
    <div className={user === userContext.user?.name ? 'message own-message' : 'message'}>
      <strong>{user}:</strong> {text}
    </div>
  );
};

export default Message;