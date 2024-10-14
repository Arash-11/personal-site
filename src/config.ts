import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://arashn.com/",
  author: "arash-11",
  desc: "Personal site of arash-11, about computer science and software development.",
  title: "home",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 10,
  enablePostsTime: false,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://x.com/arash11gt",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Arash-11",
    linkTitle: ` ${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/arash-nawyan/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Goodreads",
    href: "https://www.goodreads.com/user/show/152020696-arash",
    linkTitle: `${SITE.title} on Goodreads`,
    active: true,
  },
  {
    name: "Email",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
