"use client";

import React from "react";
import { ChatExample } from "@/components/chat";
import { Container } from "@/components/ui/container";

export default function ChatSection() {
  return (
    <section className="w-full py-12 xs:py-20 px-6">
      <Container>
        
        <div className="max-w-3xl mx-auto">
          <ChatExample />
        </div>
      </Container>
    </section>
  );
}
