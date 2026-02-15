"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Software Engineer",
    company: "Enterprise Projects",
    period: "2020 — Present",
    desc: [
      "Developed REST APIs with Spring Boot",
      "System integration using WSO2 Micro Integrator",
      "Frontend development with React / Next.js",
      "Database design and optimization",
    ],
  },
  {
    role: "Backend Developer",
    company: "Web Applications",
    period: "2018 — 2020",
    desc: [
      "Java backend services",
      "API integration",
      "SQL database management",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Experience() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Career
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            My professional journey and key contributions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-transparent dark:from-gray-800 dark:via-gray-700" />

          <div className="space-y-16 sm:space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative pl-20 sm:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full blur-md opacity-50" />
                    <div className="relative w-16 h-16 bg-white dark:bg-neutral-900 rounded-full border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg">
                      <Briefcase className="text-gray-600 dark:text-gray-400" size={20} />
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-0">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full inline-block w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.desc.map((d, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{d}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

