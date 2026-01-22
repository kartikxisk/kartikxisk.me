"use client";
import { GlowingBorderCard } from "@/components/ui/glowing-card";
import { GradientText } from "@/components/ui/text-reveal";
import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ki.kartik11@gmail.com",
      href: "mailto:ki.kartik11@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-8743870095",
      href: "tel:+918743870095",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Uttar Pradesh, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/kartikxisk",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kartikxisk",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-400">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to chat, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <GlowingBorderCard className="h-full">
              <h3 className="mb-6 text-xl font-semibold text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white transition-colors hover:text-cyan-400"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-500">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </GlowingBorderCard>
          </motion.div>

          {/* Quick Message CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <GlowingBorderCard className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                <Send className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Ready to Start?
              </h3>
              <p className="mb-6 text-neutral-400">
                Drop me a message and I&apos;ll get back to you as soon as
                possible.
              </p>
              <a
                href="mailto:ki.kartik11@gmail.com?subject=Hello%20Kartik&body=Hi%20Kartik,%0D%0A%0D%0AI%20would%20like%20to%20discuss..."
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Send Email
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <p className="mt-6 text-sm text-neutral-500">
                or reach out via{" "}
                <a
                  href="https://linkedin.com/in/kartikxisk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  <GradientText>LinkedIn</GradientText>
                </a>
              </p>
            </GlowingBorderCard>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-24 border-t border-white/10 pt-8 text-center"
      >
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Kartik Kumar. Built with{" "}
          <GradientText>Next.js</GradientText>,{" "}
          <GradientText>Tailwind CSS</GradientText>, and{" "}
          <GradientText>Framer Motion</GradientText>.
        </p>
      </motion.div>
    </section>
  );
};
