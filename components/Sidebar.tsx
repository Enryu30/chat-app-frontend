"use client";

import React, { useEffect, useState } from "react";
import Contact from "@/components/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSContact } from "@/store/contactSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.contact.sContact);
  const allContacts = useSelector((state) => state.contact.allContacts);

  // Start collapsed on small screens only
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Initialize collapse state based on screen width on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsCollapsed(window.innerWidth < 768);
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const handleContactSelect = (contact) => {
    dispatch(setSContact(contact));
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  };

  return (
    <aside
      className={`relative flex flex-col h-screen shadow-md rounded-r-lg border-r border-gray-200 bg-white transition-width duration-300 ease-in-out flex-shrink-0  ${
        isCollapsed ? "w-16" : "w-72"
      }`}
      aria-label="Contacts Sidebar"
    >
      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-3 border-b border-gray-200 select-none flex-shrink-0">
        <h2
          className={`font-semibold text-lg text-gray-900 transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          Chats
        </h2>

        <button
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute top-3 right-3 z-30 flex items-center justify-center bg-white shadow-md rounded-full p-1 w-7 h-7 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          type="button"
          tabIndex={0}
        >
          {isCollapsed ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Contact List */}
      <nav
        className={`flex-1 overflow-y-auto bg-white transition-opacity duration-300 ${
          isCollapsed ? "opacity-70" : "opacity-100"
        }`}
        aria-label="Contact list"
      >
        {allContacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => handleContactSelect(contact)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleContactSelect(contact);
              }
            }}
            className="focus:outline-none"
          >
            <Contact contact={contact} isCollapsed={isCollapsed} />
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
