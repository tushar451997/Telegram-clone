// src/hooks/useFetchMessages.ts
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMessages = (chatId) => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const result = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
        );
        setMessages(result.data.data);
      } catch (error) {
        setError(error);
      }
    };

    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  return { messages, error };
};

export default useFetchMessages;
