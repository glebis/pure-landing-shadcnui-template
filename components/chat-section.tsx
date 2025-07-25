"use client";

import React from "react";
import { ChatExample } from "@/components/chat";
import { Container } from "@/components/ui/container";

export default function ChatSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience Natural Conversations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wanda responds with human-like typing patterns and transcribed audio for a more natural interaction.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ChatExample />
        </div>
      </Container>
    </section>
  );
}
