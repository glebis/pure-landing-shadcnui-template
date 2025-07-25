import {
  AlertTriangle,
  DoorOpen,
  MessageSquareOff,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
  User,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import ChatSection from "@/components/chat-section";

const features = [
  {
    icon: AlertTriangle,
    title: "Hidden Friction",
    description:
      "Your new managers lack the experience to spot burnout, resolve conflicts, or re-engage a quiet quitter. Team performance and morale are the first to suffer.",
  },
  {
    icon: DoorOpen,
    title: "A Revolving Door",
    description:
      "Great employees don't quit companies; they quit managers. The cost of losing a valued team member is far greater than the cost of properly equipping their leader.",
  },
  {
    icon: MessageSquareOff,
    title: "Broken Communication",
    description:
      "Without confidence, new managers avoid difficult feedback, leading to unresolved issues that fester and impact the entire team's productivity.",
  },
 
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl font-normal tracking-tight text-center mb-12">
        You Promoted Your Best People. <br></br>Are They Ready to Lead?
      </h1>
      
      <div className="w-full max-w-screen-md mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Text Column - 5/12 */}
        <div className="w-full lg:w-5/12">
          <p className="text-xl sm:text-2xl tracking-tight text-muted-foreground">
            You promoted them because they were brilliant individual contributors. But leadership is a completely different skill set. When new managers are unprepared, they aren't just learning on the job—they're experimenting on your team.
          </p>
        </div>
        
        {/* Chat Dialog Column - 7/12 */}
        <div className="w-full lg:w-7/12">
          <ChatSection />
        </div>
      </div>
      
      <div className="w-full max-w-screen-lg mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
