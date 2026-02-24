// import React hooks
import { useState, useEffect } from "react"; 
//useState manages component state (scroll state, mobile menu state, active section).
//useEffect runs logic after the component mounts (scroll listener).

import { Menu, X } from "lucide-react";
//Imports Menu (hamburger icon for mobile menu) and 
// X (close icon) from the Lucide React icon library.

import { motion, AnimatePresence } from "framer-motion";
//motion.div, motion.a turn normal HTML elements into animated ones.
//AnimatePresence enables exit animations when elements unmount.

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]; //This defines all the navigation entries in one place.
//Each item has a label (display text) and href (link target / ID of the page section to scroll to).

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  //isScrolled starts with "is" and indicates a boolean value.
  //setIsScrolled starts with "set" and is used to update the isScrolled state.
  //Standard React naming convention.

  //Basically: "Create a piece of memory for this component called isScrolled. 
  //Start it as false. Give me a function called setIsScrolled that I must use to update it. 
  //When I update it, re-render the component.”
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //Declares a variable binding that cannot be reassigned. Same rule as before.
  //Start with the mobile menu closed. Provide a function to open/close it.

  const [activeSection, setActiveSection] = useState("home");
  //Same: binding cannot be reassigned. Same destructuring pattern.
  //activeSection is a string state, not a boolean.
  //It holds the ID/name of the section currently considered active, in this case home.
  //Basically: Remember which section is active. Start with “home”.

  useEffect(() => {
    //That’s what useEffect is for: run side-effects after React paints the UI.
    const handleScroll = () => {
      //You create a function called handleScroll.
      //Because addEventListener needs a function reference to call when the event happens.
      setIsScrolled(window.scrollY > 50);
      //This line updates state based on scroll position.
      //If the vertical scroll position is more than 50 pixels, set isScrolled to true.
      //50px is a UX threshold. It prevents the header from changing the moment you scroll 1px.

      const sections = navItems.map((item) => item.href.replace("#", ""));
      //This creates a list of section IDs from your navigation data.
      //.map transforms an array into a new array by applying a function to each element.
      //Here, it takes each nav item, extracts the href, and removes the leading #.
      //We remove the # because getElementById needs just the ID name.
      //So sections becomes ["home", "services", "works", "skills", "about", "contact"].

      for (const section of sections.reverse()) {
        ////Loop through all section IDs, but in reverse order (bottom → top)
        const element = document.getElementById(section);
        //Try to find the DOM element that has id equal to the section name
       //Example: section = "about" → looks for <div id="about">

        if (element) {
          //Only continue if the element actually exists in the DOM / on the page.
          const rect = element.getBoundingClientRect();
          //getBoundingClientRect() returns the size of an element and its position relative to the viewport.
          //The viewport is the visible area of the webpage inside the browser window.
          if (rect.top <= 300) {
          //Check if the top of this section has reached
          //150px or less from the top of the viewport
          //This means the section is currently "active" or has been scrolled into
            setActiveSection(section);
            //Update React state to mark this section as the active one
           //This triggers a re-render so the correct nav item is highlighted
            break;
            //Exit the loop early since we found the active section
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    //Attach the scroll event listener to the window
    //Every time the user scrolls, handleScroll will run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);//Cleanup function for useEffect
  //This runs when the component unmounts
  //It removes the scroll listener to prevent memory leaks

  //Empty dependency array means:
  // - run this effect once when the component mounts
  // - clean up when the component unmounts
  //A component mounts when React puts it on the screen, 
  //and unmounts when React removes it from the screen.

  //“Mounting is when a component is first rendered into 
  //the DOM. Unmounting is when React removes it from the DOM and runs cleanup logic.”

  //A DOM element is a JavaScript object created by the browser that represents an HTML element on the page.

// Declare a constant function named handleNavClick
// This function handles clicks on navigation links
const handleNavClick = (href: string) => {

  // Update React state to close the mobile navigation menu
  // setIsMobileMenuOpen is the state setter from useState
  setIsMobileMenuOpen(false);

  // Use the browser DOM API to find the first element
  // that matches the CSS selector stored in `href`
  // Example: href = "#about" → finds the element with id="about"
  const element = document.querySelector(href);

  // Check if the element was found in the DOM
  // querySelector returns null if no element matches
  if (element) {

    // Scroll the page so that this element becomes visible
    // behavior: "smooth" enables animated scrolling instead of a jump
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Return JSX — this describes what the Header component renders on screen
return (
  // The <header> element represents the site header / navigation bar
  <header
    // className uses a template string so we can conditionally apply styles
    // based on React state (isScrolled)
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      // If the page is scrolled, apply background blur and border
      // Otherwise keep the header transparent
      isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-white/30" 
        : "bg-transparent"
    }`}
  >
    {/* Container centers content and adds horizontal padding */}
    <div className="container mx-auto px-6">

      {/* Flex container for logo, nav, and mobile button */}
      <div className="flex items-center justify-between h-20">

        {/* Logo / brand name */}
        <a
          // href uses a hash to reference the section with id="home"
          href="#home"

          // Override default anchor behavior
          // Prevent instant jump and use smooth scrolling instead
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}

          // Typography and hover styling for the logo
          className="text-lg font-bold tracking-wider text-foreground hover:text-primary transition-colors"
        >
          DANIIL
        </a>

        {/* Desktop Navigation */}
        <nav
          // Hidden on small screens, shown as flex starting at medium screens
          className="hidden md:flex items-center gap-8"
        >
          {/* Loop through navItems to generate links */}
          {navItems.map((item) => (
            <a
              // key helps React efficiently update lists
              key={item.href}

              // href defines which section this link points to
              href={item.href}

              // Prevent default anchor jump and use smooth scroll logic
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}

              // Conditionally style the link based on activeSection state
              className={`text-sm font-medium tracking-wide transition-colors link-underline ${
                // If this section is active, highlight it
                activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {/* Display the navigation label */}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          // Toggle mobile menu open/closed when clicked
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

          // Hide button on desktop, show on mobile
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"

          // Accessibility label for screen readers
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Show X icon if menu is open, Menu icon if closed */}
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {/* Only render the mobile menu if it is open */}
      {isMobileMenuOpen && (
        <motion.div
          // Initial animation state (before appearing)
          initial={{ opacity: 0, y: -20 }}

          // Animate to visible state
          animate={{ opacity: 1, y: 0 }}

          // Animate when the component is removed
          exit={{ opacity: 0, y: -20 }}

          // Control animation speed
          transition={{ duration: 0.2 }}

          // Styling for the mobile dropdown menu
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border"
        >
          {/* Mobile nav container */}
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">

            {/* Loop through nav items for mobile menu */}
            {navItems.map((item, index) => (
              <motion.a
                // Key for React list rendering
                key={item.href}

                // Anchor reference to section
                href={item.href}

                // Prevent default jump and use smooth scroll
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}

                // Initial animation state for staggered entrance
                initial={{ opacity: 0, x: -20 }}

                // Animate into view
                animate={{ opacity: 1, x: 0 }}

                // Delay animation based on index for stagger effect
                transition={{ delay: index * 0.05 }}

                // Conditional styling for active link
                className={`text-2xl font-medium tracking-wide transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Display nav item label */}
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
);

}
