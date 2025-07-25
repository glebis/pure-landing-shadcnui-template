import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
  User,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Settings2,
    title: "Customizable Layouts",
    description:
      "Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.",
  },
  {
    icon: Blocks,
    title: "Interactive Widgets",
    description:
      "Embed polls, quizzes, or forms to keep your audience engaged.",
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description:
      "Generate summaries, auto-format content, or translate into multiple languages seamlessly.",
  },
  {
    icon: Film,
    title: "Media Integrations",
    description:
      "Connect with Spotify, Instagram, or your own media library for dynamic visuals and sound.",
  },
  {
    icon: ChartPie,
    title: "Advanced Analytics",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
  },
  {
    icon: MessageCircle,
    title: "Seamless Collaboration",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12">
        You Promoted Your Best People. <br></br>Are They Ready to Lead?
      </h2>
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Text Column - 5/12 */}
        <div className="w-full lg:w-5/12">
          <p className="text-xl sm:text-2xl tracking-tight text-muted-foreground">
            You promoted them because they were brilliant individual contributors. But leadership is a completely different skill set. When new managers are unprepared, they aren't just learning on the job—they're experimenting on your team.
          </p>
        </div>
        
        {/* Chat Dialog Column - 7/12 */}
        <div className="w-full lg:w-7/12">
          <Card className="border shadow-md">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Manager Message */}
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="font-medium text-sm mb-1">John (Manager)</p>
                    <p className="text-sm">I need to give feedback to my team member about missing deadlines, but I don't want to come across as too harsh. How should I approach this?</p>
                  </div>
                </div>
                
                {/* Wanda Response */}
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src="/wanda-avatar.png" alt="Wanda" />
                    <AvatarFallback className="bg-purple-600 text-white">W</AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="font-medium text-sm mb-1">Wanda AI</p>
                    <p className="text-sm">I recommend using the SBI framework (Situation, Behavior, Impact) for your feedback:</p>
                    <ol className="list-decimal text-sm ml-5 mt-2 space-y-1">
                      <li><strong>Situation:</strong> "During our last project..."</li>
                      <li><strong>Behavior:</strong> "I noticed the deliverables were submitted after the agreed deadline..."</li>
                      <li><strong>Impact:</strong> "This caused delays for the team and we had to rush other aspects of the project."</li>
                    </ol>
                    <p className="text-sm mt-2">Then, ask open questions to understand their perspective: "What challenges did you face that led to the delays?" This creates a two-way conversation rather than just criticism.</p>
                  </div>
                </div>
                
                {/* Manager Follow-up */}
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="font-medium text-sm mb-1">John (Manager)</p>
                    <p className="text-sm">That's helpful! Should I schedule a separate meeting for this feedback or include it in our regular 1:1?</p>
                  </div>
                </div>
                
                {/* Wanda Second Response */}
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src="/wanda-avatar.png" alt="Wanda" />
                    <AvatarFallback className="bg-purple-600 text-white">W</AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="font-medium text-sm mb-1">Wanda AI</p>
                    <p className="text-sm">For feedback about missed deadlines, your regular 1:1 is usually appropriate. This keeps the conversation in a normal context rather than making it feel like a special disciplinary meeting.</p>
                    <p className="text-sm mt-2">However, consider these factors:</p>
                    <ul className="list-disc text-sm ml-5 mt-2 space-y-1">
                      <li>If you need more than 15 minutes for the discussion, schedule separate time</li>
                      <li>If this is a recurring issue that needs focused attention, a dedicated meeting signals its importance</li>
                      <li>Consider the team member's personality - some prefer direct feedback in the moment, others need more privacy</li>
                    </ul>
                    <p className="text-sm mt-2">Would you like me to help you prepare talking points for this conversation?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="w-full max-w-screen-lg mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
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
