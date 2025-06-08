import React from 'react';
import { useSelector } from 'react-redux';
import { ContactType } from "@/data/contacts";
import { RootState } from "@/store"; // Make sure path matches your structure


interface ContactProps {
  contact: ContactType;
  isCollapsed: boolean;
}


const Contact: React.FC<ContactProps> = ({ contact, isCollapsed }) => {
  

  const sContact = useSelector((state: RootState) => state.contact.sContact);


  const isSelected = (sContact.id === contact.id);

  return (
    <div className={`flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer border-b relative
      ${isSelected ? 'border-l-4 border-blue-500 bg-blue-50' : 'border-l-transparent'}`}>
      {/* Avatar + Status */}
      <div className="relative">
      <div className= {`w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 ${contact.color}`}>
            {contact.avatar}
          </div>
        {contact.isOnline ? (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        ) : contact.isOnline ? (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-400 border-2 border-white rounded-full"></span>
        ) : null}

      </div>

      {/* Name + Last Message */}
      <div className="flex-1 ml-4 overflow-hidden">
        <div className="flex justify-between">
          <p className="font-semibold text-sm truncate">{contact.name}</p>
          <span className="text-xs text-gray-500 whitespace-nowrap">{contact.time}</span>
        </div>
        <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
