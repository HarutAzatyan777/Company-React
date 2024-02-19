import React, { useState } from 'react';
import instance from './Axios'; // Import the Axios instance



const ChatComponent = () => {
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = async () => {
    try {
      // Make a POST request using the Axios instance
      await instance.post('/socket-io-data', { data: messageInput });

      // Optionally, update the local state or perform any other actions
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle the error (e.g., display a message to the user)
    }

    setMessageInput(''); // Clear the input field after sending the message
  };

  return (
    <div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
