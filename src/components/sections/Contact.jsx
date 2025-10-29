"use client";
import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
      description: "Mon - Fri, 9am - 6pm PST",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      description: "Available for remote work worldwide",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.social.github,
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.social.linkedin,
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: personalInfo.social.twitter,
      color: "hover:text-sky-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <FadeUp>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I&apos;m always interested in new opportunities and
                  collaborations. Whether you have a project in mind or just
                  want to say hello, feel free to reach out!
                </p>
              </div>
            </FadeUp>

            {/* Contact Methods */}
            <StaggerChildren className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                      },
                    },
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-6">
                      <a
                        href={method.href}
                        className="flex items-start gap-4 group"
                        target={
                          method.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          method.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                      >
                        <motion.div
                          className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <method.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                            {method.label}
                          </p>
                          <p className="text-foreground text-base mb-1">
                            {method.value}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {method.description}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerChildren>

            {/* Social Links */}
            <FadeUp delay={0.4}>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted rounded-lg text-muted-foreground transition-all duration-300 ${social.color} hover:bg-muted/80 hover:scale-110`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <FadeUp delay={0.3}>
            <Card className="sticky top-24">
              <CardContent className="p-8">
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold">Send a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                        className="transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      disabled={isSubmitting}
                      className="transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg text-sm ${
                        submitStatus === "success"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                      }`}
                    >
                      {submitStatus === "success"
                        ? "✅ Message sent successfully! I'll get back to you soon."
                        : "❌ There was an error sending your message. Please try again."}
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full gap-3 py-6 text-base font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="h-5 w-5 border-2 border-current border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. I typically respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </FadeUp>
        </div>

        {/* Call to Action */}
        <FadeUp delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-card border-2 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Let&apos;s work together to bring your ideas to life. I&apos;m
                available for freelance work and full-time opportunities.
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-4 w-4" />
                    Start Conversation
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
