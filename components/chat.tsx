"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
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

  // Function to scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Effect to gradually show messages with a 10-second delay
  useEffect(() => {
    // Reset visible messages when the input messages change
    setVisibleMessages([]);
    
    // Show each message with a delay
    messages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, index * 10000); // 10 seconds delay between messages
    });
  }, [messages]);

  // Scroll to bottom when visible messages change
  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages]);

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {visibleMessages.map((message) => (
        <div
          key={message.id}
          className={cn("flex", {
            "justify-end": message.type === "user",
            "justify-start": message.type === "manager"
          })}
        >
          <div className="flex items-start max-w-[80%]">
            {message.type === "manager" && (
              <Avatar className="h-8 w-8 mr-2 border-2 border-accent">
                <AvatarImage src="/manager-avatar.svg" alt="Manager" />
                <AvatarFallback className="bg-primary text-primary-foreground">M</AvatarFallback>
              </Avatar>
            )}
            
            <div>
              <Card className={cn({
                "bg-primary text-primary-foreground shadow-md": message.type === "user",
                "bg-muted shadow-sm": message.type === "manager"
              })}>
                <CardContent className="p-3 py-2.5 text-sm">
                  {message.content}
                </CardContent>
              </Card>
              
              {message.type === "manager" && (
                <div className="flex items-center mt-1 ml-1 text-xs text-muted-foreground">
                  <SpeakerWaveIcon className="h-3 w-3 mr-1" />
                  <span>transcribed</span>
                </div>
              )}
            </div>
            
            {message.type === "user" && (
              <Avatar className="h-8 w-8 ml-2 border-2 border-secondary">
                <AvatarImage src="/user-avatar.svg" alt="User" />
                <AvatarFallback className="bg-secondary text-secondary-foreground">U</AvatarFallback>
              </Avatar>
            )}
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
  // Example messages
  const exampleMessages: Message[] = [
    {
      id: "1",
      content: "Hello! I'm Wanda, your AI assistant. How can I help you today with your project?",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "2",
      content: "I need help setting up a new React component for my dashboard.",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      content: "I'd be happy to help with that! Let's start by creating a basic structure for your dashboard component. What specific features do you need in this dashboard?",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "4",
      content: "I need charts, a summary section, and maybe some notifications.",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "5",
      content: "Great choices! For charts, we could use Chart.js or Recharts. The summary section can be built with cards, and for notifications, we can implement a dropdown menu or a sidebar. Would you like me to show you some code examples?",
      type: "manager",
      timestamp: new Date(),
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6 border rounded-xl shadow-md bg-card">
      <h3 className="text-xl font-medium mb-6 flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        Chat with Wanda
      </h3>
      <div className="bg-background rounded-lg p-4 mb-4 max-h-[500px] overflow-y-auto">
        <Chat messages={exampleMessages} />
      </div>
    </div>
  );
}
