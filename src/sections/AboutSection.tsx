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
  { year: "2022", event: "Started Computer Science at VU Amsterdam" },
  { year: "2023", event: "Launched Lichtique & MTCH Shopify Brands" },
  { year: "2025", event: "Built real-time ASR system for human-robot interaction" },
  { year: "2025", event: "Frontend & UI developer at Radius" },
  { year: "2025", event: "Founding Team & Strategy at Mirai" },
  { year: "2026", event: "Built Password Generator, working on the next project" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative scroll-mt-20" ref={ref}>
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
                I'm a Computer Science graduate from VU Amsterdam, building things for the web. Ranging from e-commerce storefronts to interactive web applications. I care about writing clean code that actually works and looks good doing it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I founded my own Shopify brands, developing UI components at Radius, and contributing to strategy at Mirai. I pick up new tools fast and get things shipped.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of code, I workout, train martial arts and enjoy photography. I'm based in Amsterdam and always open to connecting with like-minded people :)
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
