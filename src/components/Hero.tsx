import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/LD.png)` }}  
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center animate-fade-in">
          <p className="text-lg mb-4 tracking-[0.2em]">17 • OUTUBRO • 2026</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6">Lucas & Dayse</h1>
          <p className="text-2xl font-light mb-12">Vamos nos casar!</p>
          <Link
            to="about"
            className="inline-block px-8 py-3 border-2 border-white/80 rounded-full
                     hover:bg-white hover:text-neutral-900 transition-all duration-300
                     cursor-pointer"
          >
            Nossa História
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
