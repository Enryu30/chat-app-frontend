import React from 'react';
import { RootState } from "@/store"; // Make sure path matches your structure

import { useSelector } from 'react-redux';

const ChatHeader = () => {
  const sContact = useSelector((state: RootState) => state.contact.sContact);


  if (!sContact) { // Render nothing if no contact is selected
    return null;
  }

  return (
    <div className='sticky top-0 bg-white z-10 shadow-sm'> {/* Made it sticky to top and added shadow */}
      <div className="flex items-center gap-3 sm:gap-4 border-b px-3 sm:px-4 py-3 bg-white h-16">
        <div className="relative flex-shrink-0">
          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 ${sContact.color}`}>
            {sContact.avatar}
          </div>
          <span
            className={`absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 border-2 border-white rounded-full ${
              sContact.isOnline ? 'bg-green-500' : 'bg-gray-400' // Corrected typo
            }`}
          />
        </div>

        <div>
          <h2 className="font-semibold text-base sm:text-lg">{sContact.name}</h2> {/* Adjusted font sizes */}
          <span className={`text-sm sm:text-base ${sContact.isOnline ? 'text-green-500' : 'text-gray-400'}`}>
            {sContact.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
