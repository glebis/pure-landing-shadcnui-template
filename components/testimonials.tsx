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
      "Since implementing Wanda, our team's productivity has skyrocketed. The psychological safety it creates has transformed how we collaborate. Even our most introverted engineers are actively contributing to discussions now.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    designation: "HR Director",
    company: "GlobalCorp",
    testimonial:
      "Wanda has significantly reduced our staff turnover. Our employees feel their opinions truly matter, and exit interviews reflect this change. You can feel the culture shift when walking through our offices.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Priya Patel",
    designation: "Innovation Lead",
    company: "FutureLabs",
    testimonial:
      "The trust Wanda has built in our R&D teams has led to breakthrough innovations. Our ideation sessions now include everyone, not just the loudest voices. Our latest hackathon produced twice as many viable prototypes as before.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Nguyen",
    designation: "Emergency Department Director",
    company: "Central Hospital",
    testimonial:
      "During the recent crisis, teams using Wanda showed lower burnout rates than other departments. The weekly check-ins have been crucial for staff wellbeing. I've seen fewer sick days and more peer support, especially on night shifts.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    designation: "Team Lead",
    company: "Diverse Solutions",
    testimonial:
      "Wanda transformed how our multicultural team communicates. We now thrive on our differences rather than struggle with them. The focus on quality interactions has improved our projects, and we now celebrate diverse perspectives.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    designation: "CEO",
    company: "TalentForge",
    testimonial:
      "The insights on personality traits and team dynamics have been invaluable. We've restructured teams based on complementary strengths, and the results speak for themselves. Our employee satisfaction scores have improved consistently since adopting Wanda.",
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
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-background rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback
              className="text-xl font-medium "
            
            >
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
      <p className="mt-5 text-[15px] leading-relaxed">{testimonial.testimonial}</p>
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
