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
    href: "mailto:hello@daniil.dev",
    type: "email",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    type: "external",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    type: "external",
  },
];
