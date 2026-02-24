import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleProjectClick = (project: typeof projects[0]) => {
    const url = project.liveUrl || project.githubUrl || project.pdfURL;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="works" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className="section-title">
            02 / Selected Works
          </motion.p>

          <div className="space-y-1">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer border-b border-border py-8 hover:bg-surface-elevated transition-all duration-300 -mx-6 px-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <p className="text-xs text-muted-foreground mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-muted-foreground text-sm max-w-xl mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 lg:text-right">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs px-3 py-1 border border-primary/50 text-primary hover:bg-primary hover:text-background transition-colors"
                        >
                          Live
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs px-3 py-1 border border-primary/50 text-primary hover:bg-primary hover:text-background transition-colors"
                        >
                          GitHub
                        </a>
                      )}

                      {project.pdfURL && (
                        <a
                          href={project.pdfURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs px-3 py-1 border border-primary/50 text-primary hover:bg-primary hover:text-background transition-colors"
                        >
                          PDF
                        </a>
                      )}
                    </div>

                    <span className="text-sm text-muted-foreground font-medium">
                      {project.year}
                    </span>
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