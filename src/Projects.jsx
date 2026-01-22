import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen overflow-visible font-sans p-0 bg-[#0f0f1e]">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-pink-600/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-[5] min-h-screen flex flex-col items-center justify-center text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-[5%]">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-glitch tracking-wide mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] uppercase">
            My Projects
          </h1>
          <p className="opacity-70 mb-8 sm:mb-12 md:mb-[60px] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-tech tracking-wider text-purple-200">
            // A selection of missions completed. Check the stats.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-10 w-full max-w-7xl"
        >
          {/* Project Card 1 */}
          <motion.div variants={cardVariants} className="group w-full max-w-[320px] h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[20px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-right">
                ID: #001<br />STAT: ACTIVE
              </div>

              <div className="mt-8">
                <h3 className="font-tech text-xl uppercase tracking-wider text-pink-300 mb-2">Weather App</h3>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-1 rounded border border-white/10">REACT.JS</span>
              </div>

              <div className="flex-grow flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h2 className="text-[4rem] font-black group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">+23°</h2>
              </div>

              <div className="border-t border-white/10 pt-4 relative z-10">
                <p className="font-bold text-white/90 font-tech">Ideal Beach</p>
                <p className="text-sm text-white/50 mt-1 font-mono">Real-time weather data visualization.</p>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div variants={cardVariants} className="group w-full max-w-[320px] h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-[20px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-right">
                ID: #002<br />STAT: DEPLOYED
              </div>

              <div className="mt-8">
                <h3 className="font-tech text-xl uppercase tracking-wider text-purple-300 mb-2">AI Chatbot</h3>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-1 rounded border border-white/10">PYTHON</span>
              </div>

              <div className="flex-grow flex items-center justify-center w-full relative">
                <div className="bg-black/50 border border-white/10 p-4 rounded-xl text-xs w-full font-mono group-hover:scale-105 transition-transform duration-300 relative z-10">
                  <span className="text-green-400">$</span> init_sequence()<br />
                  <span className="text-purple-400">&gt;&gt;</span> Hello user.<br />
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 relative z-10">
                <p className="font-bold text-white/90 font-tech">Intelligent Assistant</p>
                <p className="text-sm text-white/50 mt-1 font-mono">NLP-powered conversational agent.</p>
              </div>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div variants={cardVariants} className="group w-full max-w-[320px] h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-[20px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-right">
                ID: #003<br />STAT: ONLINE
              </div>

              <div className="mt-8">
                <h3 className="font-tech text-xl uppercase tracking-wider text-blue-300 mb-2">E-Commerce</h3>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-1 rounded border border-white/10">TAILWIND</span>
              </div>

              <div className="flex-grow flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-[3.5rem] font-bold group-hover:text-cyan-300 transition-colors duration-300 font-glitch">$85</p>
              </div>

              <div className="border-t border-white/10 pt-4 relative z-10">
                <p className="font-bold text-white/90 font-tech">Premium Store</p>
                <p className="text-sm text-white/50 mt-1 font-mono">Full-stack shopping experience.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 py-4 px-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-tech tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] relative group overflow-hidden"
        >
          <span className="relative z-10">View Mission Log</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>
    </section>
  );
}
