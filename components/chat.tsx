"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Define message types
type MessageType = "user" | "manager";

interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
}

interface ChatProps {
  messages: Message[];
  className?: string;
  showAvatars?: boolean;
}

export function Chat({ messages, className = "" }: ChatProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to bottom of chat container only
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Find the closest scrollable parent container
      const scrollableParent = messagesEndRef.current.closest('.overflow-y-auto');
      if (scrollableParent) {
        scrollableParent.scrollTop = scrollableParent.scrollHeight;
      }
    }
  };

  // Effect to gradually show messages with a 10-second delay
  useEffect(() => {
    // Reset visible messages when the input messages change
    setVisibleMessages([]);
    
    // Show each message with a delay
    messages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, index * 3000); // 3 seconds delay between messages
    });
  }, [messages]);

  // Scroll to bottom when visible messages change
  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages]);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {visibleMessages.map((message) => (
        <div
          key={message.id}
          className={cn("flex", {
            "w-max max-w-[75%] ml-auto": message.type === "user",
            "w-max max-w-[75%]": message.type === "manager"
          })}
        >
          <div 
            className={cn("flex flex-col gap-2 rounded-lg px-3 py-2 text-sm", {
              "bg-primary text-primary-foreground": message.type === "user",
              "bg-muted": message.type === "manager"
            })}
          >
            {message.content}
          </div>
        </div>
      ))}
      
      {/* Invisible element to scroll to */}
      <div ref={messagesEndRef} />
    </div>
  );
}

// Example usage component
export function ChatExample() {
  const [inputValue, setInputValue] = useState("");
  
  // Example messages
  const exampleMessages: Message[] = [
    {
      id: "1",
      content: "Hi, how can I help you today?",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "2",
      content: "Hey, I'm having trouble with my account.",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      content: "What seems to be the problem?",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "4",
      content: "I can't log in.",
      type: "user",
      timestamp: new Date(),
    },
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission logic here
    // For now, just clear the input
    setInputValue("");
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="space-y-1.5 p-6 flex flex-row items-center">
        <div className="flex items-center gap-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              S
            </span>
          </span>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm leading-none font-medium">Sofia Davis</p>
            <p className="text-muted-foreground text-xs">m@example.com</p>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ml-auto size-8 rounded-full"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          <span className="sr-only">New message</span>
        </button>
      </div>
      <div className="p-6 pt-0">
        <div className="h-[400px] overflow-y-auto">
          <Chat messages={exampleMessages} />
        </div>
      </div>
      <div className="flex items-center p-6 pt-0">
        {/* <form className="relative w-full" onSubmit={handleSubmit}>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 pr-10"
            id="message"
            placeholder="Type your message..."
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 absolute top-1/2 right-2 size-6 -translate-y-1/2 rounded-full"
            type="submit"
            disabled={!inputValue.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up size-3.5"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
            <span className="sr-only">Send</span>
          </button>
        </form> */}
      </div>
    </div>
  );
}
