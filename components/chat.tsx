"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

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
  
  // Function to extract button info from content
  const extractButtonInfo = (content: string) => {
    const buttonRegex = /\[button text='([^']+)'(?: variant='([^']+)')?\]/g;
    const match = buttonRegex.exec(content);
    
    if (match) {
      const buttonText = match[1];
      const buttonVariant = match[2] || "default";
      // Remove the button pattern from content
      const cleanContent = content.replace(buttonRegex, "").trim();
      
      return {
        hasButton: true,
        buttonText,
        buttonVariant,
        cleanContent,
        isRolePlay: buttonText.toLowerCase().includes("role-play")
      };
    }
    
    return {
      hasButton: false,
      buttonText: "",
      buttonVariant: "default",
      cleanContent: content,
      isRolePlay: false
    };
  };

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

  // Effect to gradually show messages with a delay
  useEffect(() => {
    // Reset visible messages when the input messages change
    setVisibleMessages([]);
    
    // Show each message with a delay
    messages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, index * 5000); // 5 seconds delay between messages
    });
  }, [messages]);

  // Scroll to bottom when visible messages change
  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages]);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {visibleMessages.map((message, index) => {
        // Extract button info if present
        const { hasButton, buttonText, buttonVariant, cleanContent } = extractButtonInfo(message.content);
        
        return (
          <React.Fragment key={`${message.id}-${index}`}>
            <div
              className={cn("flex animate-fade-in", {
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
                {cleanContent}
              </div>
            </div>
            
            {/* Button displayed outside and centered if present */}
            {hasButton && (
              <div className="flex justify-center w-full my-4 animate-fade-in" key={`button-${message.id}-${index}`}>
                <Button 
                  variant={buttonVariant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} 
                  className="mx-auto flex items-center gap-2"
                  onClick={() => console.log(`Button clicked: ${buttonText}`)}
                >
                  <Phone className="h-4 w-4" />
                  {buttonText}
                </Button>
              </div>
            )}
          </React.Fragment>
        );
      })}
      
      {/* Invisible element to scroll to */}
      <div ref={messagesEndRef} />
    </div>
  );
}

// Example usage component
export function ChatExample() {
  
  // Example messages - Conversation between first-time manager and Wanda about feedback
  const exampleMessages: Message[] = [
    {
      id: "1",
      content: "Hi there! I'm Wanda, your AI management coach. How can I support you today?",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "2",
      content: "Hi Wanda. I'm a new team lead and I need to give feedback to one of my team members who's been missing deadlines. I've never done this before and I'm worried about how they'll take it.",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      content: "I understand how challenging that can be, especially as a new manager. Giving constructive feedback is a skill that takes practice. Could you tell me a bit more about the situation and what you've observed so far?",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "4",
      content: "They've missed three deadlines in the past month. They're talented but seem disorganized. I don't want to come across as too harsh, but this is affecting our team's deliverables.",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "5",
      content: "Thank you for sharing that context. Based on what you've described, I'd recommend using the SBI framework for your feedback: Situation, Behavior, Impact. This keeps the feedback specific and objective rather than personal.",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "6",
      content: "That sounds helpful, but I'm not sure how to structure that conversation exactly. Do you have an example of how I could start?",
      type: "user",
      timestamp: new Date(),
    },
    {
      id: "7",
      content: "Absolutely! You might start with: 'I'd like to discuss the recent project deadlines (Situation). I've noticed that three deadlines were missed this month (Behavior). This has caused our team to delay deliverables to clients (Impact).' Then ask for their perspective and collaborate on solutions.",
      type: "manager",
      timestamp: new Date(),
    },
    {
      id: "8",
      content: "Would you like to practice this conversation in a voice role-play? I can play the team member while you practice delivering your feedback using the SBI framework [button text='Start role-play' variant='default']",
      type: "manager",
      timestamp: new Date(),
    },
  ];
  

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
            <p className="text-sm leading-none font-medium">Alexandra Davis</p>
            <p className="text-muted-foreground text-xs">Product Lead</p>
          </div>
        </div>
        
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
