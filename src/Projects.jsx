import React from "react";

export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-visible font-sans p-0 bg-[#0f0f1e]">
      {/* Background Glows to replace sunset */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay for that technical/gaming feel */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* CONTENT */}
      <div className="relative z-[5] min-h-screen flex flex-col items-center justify-center text-white py-20 px-[5%]">
        <h1 className="text-[4rem] md:text-[6rem] font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 drop-shadow-lg uppercase italic">
          My Projects
        </h1>
        <p className="opacity-70 mb-[60px] text-lg max-w-2xl text-center">
          A selection of missions I've completed. Check the stats.
        </p>

        <div className="flex flex-wrap justify-center gap-10 py-10 w-full max-w-7xl">
          {/* Project Card 1 */}
          <div className="group w-[300px] h-[420px] rounded-[20px] p-[25px] text-white glass-glow flex flex-col justify-between transition-all duration-500 hover:z-10 cursor-pointer">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl uppercase tracking-wider text-pink-300">Weather App</h3>
              <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">React</span>
            </div>

            <div className="flex-grow flex items-center justify-center">
              <h2 className="text-[4rem] font-black group-hover:scale-110 transition-transform duration-300">+23°</h2>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-medium text-white/80">Ideal Beach</p>
              <p className="text-sm text-white/50 mt-1">Real-time weather data visualization.</p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group w-[300px] h-[420px] rounded-[20px] p-[25px] text-white glass-glow flex flex-col justify-between transition-all duration-500 hover:z-10 cursor-pointer">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl uppercase tracking-wider text-purple-300">AI Chatbot</h3>
              <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">Python</span>
            </div>

            <div className="flex-grow flex items-center justify-center w-full">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-sm w-full font-mono group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-green-400">$</span> How can I assist you today?
                <br />
                <span className="opacity-50">...</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-medium text-white/80">Intelligent Assistant</p>
              <p className="text-sm text-white/50 mt-1">NLP-powered conversational agent.</p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group w-[300px] h-[420px] rounded-[20px] p-[25px] text-white glass-glow flex flex-col justify-between transition-all duration-500 hover:z-10 cursor-pointer">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl uppercase tracking-wider text-blue-300">E-Commerce</h3>
              <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">Tailwind</span>
            </div>

            <div className="flex-grow flex items-center justify-center">
              <p className="text-[3.5rem] font-bold group-hover:text-green-400 transition-colors duration-300">$85.00</p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-medium text-white/80">Premium Store</p>
              <p className="text-sm text-white/50 mt-1">Full-stack shopping experience.</p>
            </div>
          </div>
        </div>

        <button className="mt-[60px] py-4 px-12 rounded-full glass hover:bg-white/20 hover:scale-105 border border-white/20 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          View All Projects
        </button>
      </div>
    </section>
  );
}
