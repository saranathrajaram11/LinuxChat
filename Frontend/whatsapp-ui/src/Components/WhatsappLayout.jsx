import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { FaGripLinesVertical } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

const WhatsappLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className="w-1/4 bg-gray-800 text-white flex flex-col">
          <div className="p-4 font-bold text-lg border-b border-gray-700">
            Whatsapp UI
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* chat list goes here */}
          </div>
        </div>

        {/* chat window */}
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between items-center text-xl font-bold p-4 border-b bg-white shadow">
            {/* Left side: Header text */}
            <h1>Chat Header</h1>

            {/* Right side: All icons grouped neatly */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3 border px-3 py-2 rounded">
                <CiVideoOn className="cursor-pointer" />
                <FaGripLinesVertical />
                <IoCallOutline className="cursor-pointer" />
              </div>
              <HiOutlineDotsVertical className="text-2xl" />
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {/* messgases */}
          </div>
          <div className="p-3 border-t flex gap-2 bg-white">
            <input
              className="flex-1 p-2 border rounded-md outline-none"
              placeholder="Type the message..."
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappLayout;
