import React, { useState } from 'react';

export default function Menu({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('People');
  const [hoveredPerson, setHoveredPerson] = useState(null);

  if (!isOpen) return null;

  const tabs = ['People', 'Places', 'Trailers', 'Downloads'];
  
  const people = [
    { name: 'JASON DUVAL', color: 'text-white' },
    { name: 'LUCIA CAMINOS', color: 'text-white' },
    { name: 'CAL HAMPTON', color: 'text-white' },
    { name: 'BOOBIE IKE', color: 'text-[#ff9db5]' },
    { name: "DRE'QUAN PRIEST", color: 'text-white' },
    { name: 'REAL DIMEZ', color: 'text-white' },
    { name: 'RAUL BAUTISTA', color: 'text-white' },
    { name: 'BRIAN HEDER', color: 'text-white' },
  ];

  const getLeftPanelContent = () => {
    switch (activeTab) {
      case 'People':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-[8rem] md:text-[20rem] font-black leading-none tracking-tighter text-white uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '0 0 80px rgba(255,255,255,0.3)' }}>
              KR
            </h1>
          </div>
        );
      case 'Places':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl md:text-8xl text-white/30 uppercase font-black">PLACES</div>
          </div>
        );
      case 'Trailers':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl md:text-8xl text-white/30 uppercase font-black">TRAILERS</div>
          </div>
        );
      case 'Downloads':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl md:text-8xl text-white/30 uppercase font-black">DOWNLOADS</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 h-1/3 md:h-full relative overflow-hidden">
        {/* Cinematic Gradient Background */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, #1a2a6c 0%, #2d3561 20%, #3e4875 40%, #5a4d7c 60%, #7a5a8a 80%, #9d7ba6 100%)'
          }}
        />
        
        {/* Film Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />

        {/* Content */}
        <div className="relative w-full h-full transition-all duration-500">
          {getLeftPanelContent()}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 h-2/3 md:h-full relative" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)'
          }}
        />

        {/* Top Navigation */}
        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex gap-0 z-10 scale-75 md:scale-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-8 py-2 md:py-3 font-bold uppercase text-xs md:text-sm tracking-wide transition-all ${
                activeTab === tab
                  ? 'bg-white text-black rounded-full'
                  : 'text-white'
              }`}
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 md:top-8 right-4 md:right-8 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-6 md:h-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Main Content - People List */}
        {activeTab === 'People' && (
          <div className="absolute top-[25%] md:top-[20%] left-6 md:left-16 flex flex-col gap-0.5 md:gap-1">
            <div className="text-white/40 text-xs uppercase tracking-widest mb-3 md:mb-6 font-bold">PEOPLE</div>
            {people.map((person, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredPerson(person.name)}
                onMouseLeave={() => setHoveredPerson(null)}
                className="cursor-pointer transition-all"
              >
                <div 
                  className={`text-3xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight transition-all ${person.color} ${
                    hoveredPerson === person.name ? 'opacity-60' : 'opacity-100'
                  }`}
                  style={{ 
                    fontFamily: 'Impact, "Arial Black", sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {person.name}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-4 md:bottom-8 left-6 md:left-16 flex items-center gap-2 md:gap-3 text-white">
          <button className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>English</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-3 md:h-3">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 md:bottom-8 right-6 md:right-16 flex items-center gap-2 md:gap-3 text-white">
          <button className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium">
            <span>Motion</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-3 md:h-3">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Demo wrapper to show the menu
function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="px-6 py-3 bg-white text-black font-bold rounded"
        >
          Open Menu
        </button>
      )}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}