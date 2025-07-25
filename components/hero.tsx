import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-secondary text-secondary-foreground rounded-full py-1 border-none">
            Beta
          </Badge>
          <h1 className="mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal !leading-[1.2]">
          From First-Time&nbsp;Manager to&nbsp;Fearless&nbsp;Leader
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
          Wanda is the AI co-pilot for new managers. Get the confidence,
          clarity, and skills you need to navigate tough conversations, run
          motivating 1-on-1s, and unlock your team&apos;s true potential—from
          day one.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              Book a demo <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button> */}
          </div>
        </div>
      </div>
      {/* <LogoCloud className="mt-24 max-w-3xl mx-auto" /> */}
    </div>
  );
};

export default Hero;
