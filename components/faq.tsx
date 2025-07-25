import {
  Brain,
  Users,
  TrendingUp,
  Heart,
  MessageCircle,
  Shield,
} from "lucide-react";

const faq = [
  {
    icon: Brain,
    question: "AI coaching is effective as  human coaching",
    answer: "Research shows AI coaches match human coaches on task-specific competence. A PRISMA-grade systematic review of 16 studies (N=2,312) found high user acceptance and equivalent effectiveness (Passmore, Olafsson, & Tee, 2025).",
  },
  {
    icon: TrendingUp,
    question: "Psychological safety improves team performance",
    answer: "High psychological safety can increase team productivity by up to 50% (Ragan Communications, 2023). It acts as the 'engine' that enables learning behaviors and team efficacy to drive performance (Kim, Lee, & Connerton, 2020).",
  },
  {
    icon: Users,
    question: "Psychological safety has impact on employee retention",
    answer: "Improving psychological safety can reduce staff turnover by 27%. When employees feel their opinions matter, they're significantly more likely to stay (Gallup research, reported by Ragan Communications, 2023).",
  },
  {
    icon: Heart,
    question: "Psychological safety affects diverse teams",
    answer: "Psychological safety reverses the negative effect of diversity on satisfaction. High psychological safety significantly improves well-being and satisfaction in diverse teams (Bresman & Edmondson, 2022).",
  },
  {
    icon: MessageCircle,
    question: "Communication quality is more important than frequency",
    answer: "Communication quality has a significantly stronger relationship with team performance (ρ=0.36) than communication frequency (ρ=0.19). Quality communication also mediates between psychological safety and innovative performance (Marlow et al., 2018).",
  },
  {
    icon: Shield,
    question: "Personality traits predict leadership success",
    answer: "Conscientiousness is consistently the strongest predictor of job performance across all occupations. However, 'Dark Triad' traits (narcissism, machiavellianism, psychopathy) ultimately create toxic work environments despite short-term leadership emergence (Furnham, 2014).",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Science behind Wanda 
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
