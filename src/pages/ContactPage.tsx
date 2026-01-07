import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello Panji! 👋%0A
My name is ${encodeURIComponent(form.name)}.%0A
My email is ${encodeURIComponent(form.email)}.%0A
Message: ${encodeURIComponent(form.message)}%0A`;

    const waUrl = `https://wa.me/6282113589617?text=${text}`;
    window.open(waUrl, "_blank");

    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  /** 🎬 Animations */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/panji-hanum",
      color: "hover:text-sky-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/panjihanum",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/panjihanum",
      color: "hover:text-pink-500",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/6282113589617",
      color: "hover:text-green-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:panhanum.dev@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section
      id="contactPage"
      className="relative w-full min-h-screen bg-[var(--neo-bg)] py-20 px-6 lg:px-24 overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-primary underline text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      {/* Layout Container */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Socials */}
        <motion.div
          className="text-left space-y-6"
          variants={fadeUp as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-semibold dark:text-white"
            variants={fadeUp as any}
            custom={0}
          >
            Let's build something great together 🚀
          </motion.h3>
          <motion.p
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
            variants={fadeUp as any}
            custom={1}
          >
            Whether you're looking for a developer, a collaborator, or just want
            to connect — feel free to reach out via any of the platforms below
            or send me a message directly.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap gap-5 pt-4 text-3xl text-primary"
            variants={fadeUp as any}
            custom={2}
          >
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${item.color}`}
                whileHover={{ scale: 1.25, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                title={item.name}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="neo-surface rounded-2xl p-8 space-y-5 w-full"
          variants={fadeUp as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="neo-input px-4 py-2 outline-none transition-all"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="neo-input px-4 py-2 outline-none transition-all"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              rows={4}
              className="neo-input px-4 py-2 outline-none transition-all resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neo-button w-full py-2.5 rounded-full text-primary dark:text-white font-semibold transition-all"
          >
            {sent ? "✅ Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 blur-[120px] rounded-full" />
    </section>
  );
};

export default ContactPage;
