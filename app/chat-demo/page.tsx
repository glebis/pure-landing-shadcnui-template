import React from "react";
import { ChatExample } from "@/components/chat";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function ChatDemoPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto pt-16 xs:pt-20 sm:pt-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Chat Demo</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          This demo showcases a chat interface with typing animation and special formatting for manager&apos;s notes.
        </p>
        
        <div className="max-w-2xl mx-auto mb-16">
          <ChatExample />
        </div>
      </main>
      <Footer />
    </>
  );
}
