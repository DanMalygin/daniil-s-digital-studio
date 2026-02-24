import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/services";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="pt-32 pb-0 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.p variants={itemVariants} className="section-title">
            01 / What I Do
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-8 border border-border bg-card hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300 flex flex-col"
              >
                {/* Index */}
                <span className="text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {service.indexLabel}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mt-6 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Tech Focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
