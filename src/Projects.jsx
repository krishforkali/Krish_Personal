import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: 'Weather App',
      tech: 'REACT.JS',
      status: 'ACTIVE',
      color: 'from-pink-500 to-purple-600',
      glowColor: 'rgba(236, 72, 153, 0.5)',
      icon: '🌤️',
      description: 'Real-time weather data visualization with beautiful UI',
      features: ['Live Weather', 'Multi-City', '7-Day Forecast'],
      stats: { users: '2.3K', rating: '4.8/5' }
    },
    {
      id: 2,
      name: 'AI Chatbot',
      tech: 'PYTHON + NLP',
      status: 'DEPLOYED',
      color: 'from-purple-500 to-blue-600',
      glowColor: 'rgba(168, 85, 247, 0.5)',
      icon: '🤖',
      description: 'NLP-powered conversational agent with context awareness',
      features: ['Natural Language', 'Context Memory', 'Multi-Language'],
      stats: { users: '5.1K', rating: '4.9/5' }
    },
    {
      id: 3,
      name: 'E-Commerce',
      tech: 'TAILWIND + NODE',
      status: 'ONLINE',
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'rgba(34, 211, 238, 0.5)',
      icon: '🛒',
      description: 'Full-stack shopping experience with payment integration',
      features: ['Secure Payment', 'Cart System', 'Order Tracking'],
      stats: { users: '8.7K', rating: '4.7/5' }
    },
    {
      id: 4,
      name: 'Portfolio Site',
      tech: 'NEXT.JS',
      status: 'LIVE',
      color: 'from-green-500 to-emerald-600',
      glowColor: 'rgba(34, 197, 94, 0.5)',
      icon: '💼',
      description: 'Modern portfolio with 3D animations and smooth transitions',
      features: ['3D Graphics', 'Dark Mode', 'Responsive'],
      stats: { users: '1.2K', rating: '5.0/5' }
    },
    {
      id: 5,
      name: 'Task Manager',
      tech: 'VUE.JS',
      status: 'BETA',
      color: 'from-orange-500 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.5)',
      icon: '✓',
      description: 'Productivity app with kanban boards and time tracking',
      features: ['Kanban Board', 'Time Track', 'Team Collab'],
      stats: { users: '3.4K', rating: '4.6/5' }
    },
    {
      id: 6,
      name: 'Music Player',
      tech: 'REACT + WEB AUDIO',
      status: 'ACTIVE',
      color: 'from-pink-500 to-rose-600',
      glowColor: 'rgba(244, 63, 94, 0.5)',
      icon: '🎵',
      description: 'Beautiful music player with visualizer and playlist management',
      features: ['Audio Visualizer', 'Playlists', 'Lyrics Sync'],
      stats: { users: '6.2K', rating: '4.8/5' }
    }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spins = 5 + Math.random() * 3;
    const randomIndex = Math.floor(Math.random() * projects.length);
    const segmentAngle = 360 / projects.length;
    const targetRotation = (spins * 360) + (randomIndex * segmentAngle);
    
    setRotation(targetRotation);
    
    setTimeout(() => {
      setSelectedProject(randomIndex);
      setIsSpinning(false);
    }, 4000);
  };

  const project = projects[selectedProject];
  const segmentAngle = 360 / projects.length;

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden font-sans p-0 bg-[#0f0f1e]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

      <div className="relative z-[5] min-h-screen flex flex-col items-center justify-center text-white py-20 px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] uppercase">
            PROJECT WHEEL
          </h1>
          <p className="opacity-70 text-sm md:text-lg max-w-2xl mx-auto tracking-wider text-purple-200">
            // Spin the wheel to explore my projects
          </p>
        </motion.div>

        {/* Wheel Container */}
        <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4">
          
          {/* Lucky Wheel */}
          <div className="relative flex flex-col items-center">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
            </div>

            {/* Wheel */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-40 animate-pulse"></div>
              
              {/* Wheel Base */}
              <div 
                className="absolute inset-4 rounded-full border-8 border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-[4000ms] ease-out"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white/20 shadow-[0_0_30px_rgba(250,204,21,0.6)] z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#0f0f1e] border-2 border-yellow-300/50"></div>
                </div>

                {/* Segments */}
                {projects.map((proj, index) => {
                  const angle = (index * segmentAngle) - 90;
                  const isSelected = index === selectedProject && !isSpinning;
                  
                  return (
                    <div
                      key={proj.id}
                      className="absolute top-1/2 left-1/2 origin-left transition-all duration-300"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        width: '50%',
                        height: '2px'
                      }}
                    >
                      {/* Segment Background */}
                      <div
                        className="absolute left-0 top-0 h-full"
                        style={{
                          width: '100%',
                          transformOrigin: 'left center',
                          clipPath: `polygon(0 -100px, 100% -2px, 100% 2px, 0 100px)`
                        }}
                      >
                        <div 
                          className={`w-full h-full bg-gradient-to-r ${proj.color} opacity-30 ${isSelected ? 'opacity-60' : ''}`}
                        ></div>
                      </div>

                      {/* Project Icon & Name */}
                      <div className="absolute left-[60%] top-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div 
                          className={`text-2xl mb-1 transition-transform duration-300 ${isSelected ? 'scale-125' : ''}`}
                          style={{ transform: `rotate(${-angle}deg)` }}
                        >
                          {proj.icon}
                        </div>
                        <div 
                          className={`text-[10px] font-bold text-white/70 whitespace-nowrap ${isSelected ? 'text-white' : ''}`}
                          style={{ transform: `rotate(${-angle}deg)` }}
                        >
                          {proj.name.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Spin Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={spinWheel}
              disabled={isSpinning}
              className={`mt-8 py-4 px-12 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-300 relative overflow-hidden ${
                isSpinning 
                  ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]'
              }`}
            >
              <span className="relative z-10">{isSpinning ? 'SPINNING...' : 'SPIN WHEEL'}</span>
              {!isSpinning && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </motion.button>
          </div>

          {/* Project Info Box */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-3xl blur-xl opacity-40"
              style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}
            ></div>

            {/* Main Box */}
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{project.icon}</div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-1">
                      {project.name}
                    </h3>
                    <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {project.tech}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white/40 font-mono">ID: #{project.id.toString().padStart(3, '0')}</div>
                  <div className={`text-xs font-bold mt-1 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 font-mono"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-xs text-white/40 font-mono mb-1">USERS</div>
                  <div className="text-xl font-bold text-white">{project.stats.users}</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 font-mono mb-1">RATING</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {project.stats.rating}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-6 py-3 rounded-xl font-bold uppercase text-sm bg-gradient-to-r ${project.color} text-white transition-all duration-300 hover:shadow-lg`}
                style={{ boxShadow: `0 10px 30px ${project.glowColor}` }}
              >
                View Project Details
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-white/30 text-xs font-mono"
        >
          <p>TOTAL PROJECTS: {projects.length} | SPIN TO EXPLORE</p>
        </motion.div>
      </div>
    </section>
  );
}