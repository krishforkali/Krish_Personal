import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Chess from './Chess'
import Footer from './Footer'

function App() {
  React.useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let color = '#ffffff'; // Default
          if (entry.target.id === 'hero') color = '#ffffff';
          if (entry.target.id === 'projects') color = '#a855f7'; // Purple
          if (entry.target.id === 'chess') color = '#4ade80'; // Green
          if (entry.target.id === 'footer') color = '#3b82f6'; // Blue

          document.body.style.setProperty('--scrollbar-color', color);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Projects />
      <Chess />
      <Footer />
    </div>
  )
}

export default App
