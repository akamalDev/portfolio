"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "API Integration Platform",
    desc: "WSO2 Micro Integrator + Spring Boot mapping between frontend and Miles backend.",
    tech: ["WSO2", "Spring Boot", "REST"],
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Web Management App",
    desc: "Full stack web application with authentication and dashboards.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    gradient: "from-green-500/10 to-teal-500/10",
  },
  {
    title: "System Mapping Layer",
    desc: "Auto integration layer for enterprise APIs.",
    tech: ["Java", "WSO2", "Microservices"],
    gradient: "from-orange-500/10 to-red-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#050505] transition-colors duration-300">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of projects showcasing my expertise in full-stack development and system architecture.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <div className="relative h-full border border-gray-200 dark:border-gray-800 rounded-3xl p-8 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-700 group-hover:shadow-2xl dark:group-hover:shadow-gray-900/50">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="text-gray-600 dark:text-gray-400" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-[15px]">
                    {p.desc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 font-medium backdrop-blur-sm"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white"
                  >
                    View Project
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

