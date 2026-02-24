export interface SocialLink {
  id: string;
  label: string;
  href: string;
  type: "email" | "external";
}

export const socials: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=daniilmalyginn@gmail.com",
    type: "external",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/DanMalygin",
    type: "external",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniil-malygin-920b91274/",
    type: "external",
  },
];
