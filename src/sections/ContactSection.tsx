import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { socials } from "@/data/socials";

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

const socialIcons: Record<string, typeof Mail> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email must be less than 255 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mreaovep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              LET'S CONNECT
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question
                  or just want to say hi, my inbox is always open.
                </p>
              </div>

              <div className="space-y-4">
                {socials.map((social) => {
                  const Icon = socialIcons[social.id] || Mail;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target={social.type === "external" ? "_blank" : undefined}
                      rel={social.type === "external" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border ${errors.name ? "border-destructive" : "border-border"
                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border ${errors.email ? "border-destructive" : "border-border"
                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border ${errors.message ? "border-destructive" : "border-border"
                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
