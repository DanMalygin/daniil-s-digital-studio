// Import the socials array.
// This contains the list of social links (e.g., GitHub, LinkedIn, Email).
import { socials } from "@/data/socials";

export function Footer() {
  // Get the current year dynamically (e.g., 2025) so it updates automatically.
  const currentYear = new Date().getFullYear();

  return (
    // Outer wrapper of the footer with a top border and vertical padding.
    <footer className="border-t border-border py-8">

      {/* Centered container with horizontal padding */}
      <div className="container mx-auto px-6">

        {/* 
          Layout:
          - Column on mobile
          - Row on medium screens and above
          - Vertically centered items
          - Space between text and social links
        */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Footer text showing © YEAR Daniil */}
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {currentYear} Daniil Malygin. All rights reserved.
          </p>

          {/* Social links container */}
          <div className="flex items-center gap-6">

            {/* Loop through each social item and render a link */}
            {socials.map((social) => (
              <a
                key={social.id} // Unique key for React rendering

                // Destination URL for the social profile/link
                href={social.href}

                /* 
                  If social.type === "external", open the link in a new tab.
                  Internal links stay in the same tab.
                */
                target={social.type === "external" ? "_blank" : undefined}

                /* 
                  "noopener noreferrer" improves security when using target="_blank".
                  Only applied to external links.
                */
                rel={
                  social.type === "external"
                    ? "noopener noreferrer"
                    : undefined
                }

                // Text styling + hover transition
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {/* Text label for the social link (e.g., GitHub, LinkedIn) */}
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
