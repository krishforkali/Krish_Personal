import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Email', icon: '✉️', url: '#' }
  ];

  return (
    <footer id="footer" className="relative bg-[#050510] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-[5%] pb-6 sm:pb-8 md:pb-10 overflow-hidden font-sans border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-black uppercase tracking-tighter mb-8 sm:mb-10 md:mb-[50px] text-white drop-shadow-lg">
          Connect <span className="text-purple-400">With Me</span>
        </h2>

        <div className="flex justify-center gap-4 sm:gap-6 md:gap-[30px] flex-wrap mb-10 sm:mb-12 md:mb-[60px]">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="glass hover:bg-white/10 flex items-center gap-2 sm:gap-3 py-3 px-6 sm:py-4 sm:px-8 rounded-full no-underline text-white font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              aria-label={link.name}
            >
              <span className="text-lg sm:text-xl">{link.icon}</span>
              <span className="text-xs sm:text-sm">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-white/5 flex flex-col items-center gap-3 sm:gap-4">
          {/* Logo Watermark */}
          <h1 className="text-xl sm:text-2xl font-black text-white/20 uppercase tracking-widest">VI</h1>

          <p className="text-sm sm:text-base text-white/40 mb-2 sm:mb-2.5 px-4 text-center">
            © 2024 Krish Motghare. Built with React & <span className="text-pink-500">♥</span>
          </p>
          <p className="text-[10px] sm:text-xs text-white/20 italic uppercase tracking-widest">
            Mission Passed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
