export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  enablePostsTime: boolean;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "GitHub"
  | "github"
  | "LinkedIn"
  | "linkedin"
  | "Email"
  | "Twitter"
  | "twitter"
  | "X"
  | "x"
  | "Goodreads"
  | "goodreads";
