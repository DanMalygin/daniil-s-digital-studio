import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";

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

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.p variants={itemVariants} className="section-title">
            03 / Tech Stack
          </motion.p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                  {category.label}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
