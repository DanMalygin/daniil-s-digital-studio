// Importing NavLink from react-router-dom but renaming it to RouterNavLink
// because we're creating our own custom NavLink component with the same name.
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";

// forwardRef allows this component to pass refs to the underlying <a> element.
// Useful for animations, focus management, etc.
import { forwardRef } from "react";

// "cn" is your className merging utility (usually from shadcn/ui).
// It concatenates class names conditionally while removing falsey values.
import { cn } from "@/lib/utils";

// Define custom props for your NavLink component.
// Extends NavLinkProps but lets you override className, and optionally
// provide activeClassName and pendingClassName.
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;          // Base styling for the link
  activeClassName?: string;    // Extra classes applied when the link is active
  pendingClassName?: string;   // Extra classes applied during pending navigation
}

// Create the custom NavLink component.
// forwardRef allows external components to attach a ref to the underlying link.
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        // Attach the forwarded ref to the underlying <a> tag
        ref={ref}

        // Destination URL
        to={to}

        // className can be a function in react-router-dom.
        // It receives navigation states: isActive and isPending.
        // Here we merge:
        // - base className
        // - activeClassName if link is active
        // - pendingClassName if link is pending
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }

        // Pass along any remaining props (e.g., children)
        {...props}
      />
    );
  },
);

// Give the component a readable name for debugging/devtools.
NavLink.displayName = "NavLink";

// Export your custom NavLink so it can be used everywhere in your UI.
export { NavLink };
