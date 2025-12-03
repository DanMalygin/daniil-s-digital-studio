import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const timeline = [
  { year: "2021", event: "Started Computer Science degree" },
  { year: "2023", event: "First full-stack freelance project" },
  { year: "2024", event: "Built ASR system for social robots" },
  { year: "2025", event: "Launched SaaS platform" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.p variants={itemVariants} className="section-title">
            About
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a software engineer passionate about building products that make a difference. 
                My journey started with a curiosity for how things work under the hood — which 
                eventually led me to computer science and software development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've worked on projects ranging from e-commerce platforms to AI-powered systems 
                for human-robot interaction. What excites me most is the intersection of 
                technology and real-world impact — whether that's helping a business scale 
                or making interactions with technology more natural.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or diving deep into research papers on machine learning 
                and cognitive systems.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
                Timeline
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <span className="text-sm font-bold text-muted-foreground w-16 flex-shrink-0">
                      {item.year}
                    </span>
                    <div className="flex-1 pb-6 border-b border-border last:border-0">
                      <p className="text-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
