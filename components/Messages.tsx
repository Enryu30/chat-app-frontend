import React from 'react';
import { useSelector } from 'react-redux';

const Messages = ({ messagesEndRef, isTyping }) => {
  const sContact = useSelector(state => state.contact.sContact);

  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
        {sContact.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
              msg.sender === 'me'
                ? 'ml-auto bg-indigo-600 text-white'
                : 'mr-auto bg-gray-200 text-gray-900'
            }`}
          >
            {msg.text}
            <div className="text-xs text-right mt-1 opacity-70">{msg.time} - {msg.status}</div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center">
            <div className="animate-pulse bg-blue-900 rounded-full h-2 w-2 mr-2"></div>
            <div className="animate-pulse bg-blue-900 rounded-full h-2 w-2 mr-2"></div>
            <div className="animate-pulse bg-blue-900 rounded-full h-2 w-2"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Messages;
