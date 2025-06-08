"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllContacts, setSContact } from '@/store/contactSlice';
import ChatHeader from './ChatHeader';
import InputBox from './InputBox';
import Messages from './Messages';

const ChatWindow = () => {
  const sContact = useSelector(state => state.contact.sContact);
  const allContacts = useSelector(state => state.contact.allContacts);
  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const botResponses = [
    "Hello! How can I assist you today?",
    "I'm here to help! What do you need?",
    "That's interesting! Tell me more.",
    "I'm just a bot, but I can listen!",
    "How can I make your day better?",
    "Feel free to ask me anything!",
    "I'm here to help you with your queries.",
    "What else would you like to know?",
  ];

  const handleSend = () => {
    if (!newMessage.trim() || !sContact?.id) return;
  
    const newMsg = {
      sender: 'me',
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'sent',
    };
  
    // Update with user message first
    const updatedContactWithUserMsg = {
      ...sContact,
      messages: [...sContact.messages, newMsg],
      lastMessage: newMsg.text,
    };
  
    const updatedContactsWithUserMsg = allContacts.map((c) =>
      c.id === updatedContactWithUserMsg.id ? updatedContactWithUserMsg : c
    );
  
    dispatch(setAllContacts(updatedContactsWithUserMsg));
    dispatch(setSContact(updatedContactWithUserMsg));
    setNewMessage('');
    setIsTyping(true); // Show typing status
  
    // Simulate bot reply after 3 seconds
    setTimeout(() => {
      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];
  
      const botMsg = {
        sender: 'bot',
        text: randomResponse,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'received',
      };
  
      const finalUpdatedContact = {
        ...updatedContactWithUserMsg,
        messages: [...updatedContactWithUserMsg.messages, botMsg],
        lastMessage: botMsg.text,
      };
  
      const finalUpdatedContacts = updatedContactsWithUserMsg.map((c) =>
        c.id === finalUpdatedContact.id ? finalUpdatedContact : c
      );
  
      dispatch(setAllContacts(finalUpdatedContacts));
      dispatch(setSContact(finalUpdatedContact));
      setIsTyping(false); // Hide typing status
    }, 3000); // Delay bot reply
  };
  
  

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [sContact.messages]);

  return (
    <div className="flex flex-col h-screen w-full border-l transition-all duration-300">
      <ChatHeader />

      {/* Scrollable Messages */}
      <Messages messagesEndRef={messagesEndRef} isTyping={isTyping} />

      {/* Fixed Input Box */}
      <InputBox newMessage={newMessage} setNewMessage={setNewMessage} handleSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
