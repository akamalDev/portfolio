"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Next.js"],
    icon: "🎨",
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "WSO2", "Micro Integrator"],
    icon: "⚙️",
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
    icon: "💾",
  },
  {
    title: "DevOps / Tools",
    items: ["Git", "Docker", "Vercel", "VS Code"],
    icon: "🚀",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Skills() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {skills.map((group, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full border border-gray-200 dark:border-gray-800 rounded-3xl p-8 bg-white dark:bg-neutral-900 transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-700 group-hover:shadow-xl dark:group-hover:shadow-gray-900/50">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
                  {group.title}
                </h3>

                <ul className="space-y-3">
                  {group.items.map((skill, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center text-gray-600 dark:text-gray-400 font-medium text-sm cursor-default"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-600 dark:group-hover:bg-gray-300 transition-colors" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

