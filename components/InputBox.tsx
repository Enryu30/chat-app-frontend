import React from 'react';

interface InputBoxProps {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

const InputBox: React.FC<InputBoxProps> = ({ newMessage, setNewMessage, handleSend }) => {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center gap-3 shadow-lg rounded-t-lg z-10 pb-20">
      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        aria-label="Type a message"
      />
      <button
        onClick={handleSend}
        className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white rounded-full p-3 transition"
        aria-label="Send message"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 8-16 8v-6l10-2-10-2V4z" />
        </svg>
      </button>
    </div>
  );
};

export default InputBox;
