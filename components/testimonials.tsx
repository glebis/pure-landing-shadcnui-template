import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    designation: "CTO",
    company: "InnovateTech",
    testimonial:
      "Since implementing Wanda last quarter, our team's productivity has skyrocketed. The psychological safety it fosters has completely transformed how we collaborate, especially during our weekly sprint planning sessions. Even our most introverted engineers are actively contributing now.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    designation: "HR Director",
    company: "GlobalCorp",
    testimonial:
      "Wanda has dramatically reduced our staff turnover across all departments. After just two quarters, our employees report feeling their opinions truly matter, and our exit interviews show a remarkable difference. The culture shift is palpable when you walk through our offices.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Priya Patel",
    designation: "Innovation Lead",
    company: "FutureLabs",
    testimonial:
      "Wanda has built within our R&D teams has directly led to breakthrough innovations in our product pipeline. Our ideation sessions used to be dominated by a few voices, but now everyone contributes. Last month's hackathon produced twice the viable prototypes compared to previous events.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Nguyen",
    designation: "Emergency Department Director",
    company: "Central Hospital",
    testimonial:
      "During the recent health crisis, our teams using Wanda showed remarkably lower burnout rates compared to other departments. The weekly check-ins and psychological safety framework have been essential for maintaining staff wellbeing. I've noticed fewer sick days and more peer support, especially among our night shift staff.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    designation: "Team Lead",
    company: "Diverse Solutions",
    testimonial:
      "Wanda transformed our multicultural team from struggling with communication misunderstandings to thriving on our differences. The focus on quality interactions rather than frequency has visibly improved our project outcomes. Our team now celebrates diverse perspectives instead of seeing them as obstacles.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    designation: "CEO",
    company: "TalentForge",
    testimonial:
      "The insights Wanda provides on personality traits and team dynamics have been invaluable for our executive leadership. We've restructured our teams based on complementary strengths rather than similar backgrounds, and the results speak for themselves. Our quarterly employee satisfaction surveys show consistent improvement since implementing Wanda's recommendations.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Testimonials
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
