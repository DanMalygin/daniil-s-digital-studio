import { socials } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {currentYear} Daniil. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target={social.type === "external" ? "_blank" : undefined}
                rel={social.type === "external" ? "noopener noreferrer" : undefined}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
