import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ArrowDown01, ArrowDownCircle, LucideArrowDownZa } from "lucide-react";
import LiquidEther from '@/components/LiquidEther';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HeroSection() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={['#6da3b6', '#3439c5', '#4eceef']}
          mouseForce={20}
          cursorSize={120}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0}
          autoIntensity={1}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Subtle grid pattern
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      /> */}

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-8"
          >
            Web Developer & Software Engineer
          </motion.p>

          {/* Main Headline */}
          <div className="mb-8">
            <motion.h1 variants={itemVariants} className="heading-display text-foreground">
              TURNING
            </motion.h1>
            <motion.h1 variants={itemVariants} className="heading-display">
              <span className="text-primary">IDEAS </span>
              <span className="text-foreground">INTO</span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="heading-display text-foreground">
              INTERFACES.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            I write code that makes designs real, with a sharp eye for detail and clean UI.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo("#contact")}
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:glow transition-all duration-300"
            >
              Contact
              <ArrowDown className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("#works")}
              className="group flex items-center gap-3 border border-border text-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
            >
              Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
}
