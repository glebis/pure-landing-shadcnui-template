import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Features",
    href: "#features",
  },
  // {
  //   title: "Pricing",
  //   href: "#pricing",
  // },
  {
    title: "Science",
    href: "#science",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Privacy",
    href: "#privacy",
  },
];

const Footer = () => {
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground w-full">
      <div className="max-w-screen-xl mx-auto px-6 xl:px-0 w-full">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10">
          <div>
            {/* Logo */}


            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          {/* <div className="max-w-xs w-full">
            <h6 className="font-semibold">Proudly made in Oxford</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </form>
          </div> */}
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5">
          {/* Copyright */}
          <span className="text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              AskWanda
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
