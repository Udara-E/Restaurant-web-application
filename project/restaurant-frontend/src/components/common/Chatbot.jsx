"use client";

import { useState, useEffect, useRef } from "react";
import chatResponses from "@/data/chatResponses";
import parse from "html-react-parser"; // ⬅ Install with: npm install html-react-parser

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg = { from: "user", text: userText };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const lowerText = userText.toLowerCase();
    const found = chatResponses.find(({ keywords }) =>
      keywords.some((k) => lowerText.includes(k))
    );

    const botReply = {
      from: "bot",
      text: found
        ? found.response
        : "Sorry, I didn't understand that. Could you rephrase?",
    };

    setTimeout(() => setMessages((prev) => [...prev, botReply]), 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-yellow-600 p-4 text-white shadow-xl hover:bg-yellow-700"
      >
        💬
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-h-[70vh] rounded-xl bg-white shadow-lg flex flex-col overflow-hidden border">
          {/* Header */}
          <div className="bg-yellow-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold">Arcadia Chat</h2>
            <button onClick={() => setIsOpen(false)} className="text-lg">
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 text-sm space-y-2">
            {messages.map(({ from, text }, idx) => (
              <p
                key={idx}
                className={`max-w-[85%] px-3 py-2 rounded-lg ${
                  from === "bot"
                    ? "bg-emerald-100 text-gray-900"
                    : "ml-auto bg-yellow-600 text-white"
                }`}
              >
                {from === "bot" ? parse(text) : text}
              </p>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex border-t p-2"
          >
            <input
              type="text"
              className="flex-1 text-sm px-3 py-2 border rounded-md focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-amber-400"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
