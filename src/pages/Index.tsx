// Importing the Header component from the components folder
import { Header } from "@/components/Header";

// Importing the Footer component from the components folder
import { Footer } from "@/components/Footer";

// Importing the HeroSection component (top section of the homepage)
import { HeroSection } from "@/sections/HeroSection";

// Importing the ServicesSection component (services you offer)
import { ServicesSection } from "@/sections/ServicesSection";

// Importing the WorksSection component (portfolio / past work)
import { WorksSection } from "@/sections/WorksSection";

// Importing the SkillsSection component (skills and technologies)
import { SkillsSection } from "@/sections/SkillsSection";

// Importing the AboutSection component (about you)
import { AboutSection } from "@/sections/AboutSection";

// Importing the ContactSection component (contact form or links)
import { ContactSection } from "@/sections/ContactSection";

// Creating the Index component — this represents your homepage
const Index = () => {
  // Returning the JSX that will be rendered on the screen
  return (
    // Outer wrapper for the whole page; sets minimum height and background color
    <div className="min-h-screen bg-background">
      {/* Renders the header/navigation bar at the top */}
      <Header />

      {/* Main content area containing all homepage sections */}
      <main>
        {/* Top hero section introducing you or your business */}
        <HeroSection />

        {/* Section showing your services */}
        <ServicesSection />

        {/* Section displaying your past work or projects */}
        <WorksSection />

        {/* Section listing your skills */}
        <SkillsSection />

        {/* Section describing who you are */}
        <AboutSection />

        {/* Section where users can contact you */}
        <ContactSection />
      </main>

      {/* Renders the footer at the bottom of the page */}
      <Footer />
    </div>
  );
};

// Exporting the Index component as the default export so the router can load it for '/'
export default Index;
