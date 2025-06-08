"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden relative"> {/* full viewport height & no scroll */}
    <Navbar />
    <div className="flex flex-1 w-full overflow-hidden fixed pt-16"> {/* flex row, no scroll */}
    <div className=" ">
          <Sidebar />
        </div>
        <div className="flex-1 h-full">
          <ChatWindow />
        </div>
    </div>
  </div>
  
  );
}
