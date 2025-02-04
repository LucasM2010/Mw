

const AboutCouple = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Aqui um texto da nossa hitória</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Foto da noiva */}
          <div className="text-center animate-slide-up">
            <div className="relative w-64 h-64 mx-auto mb-8 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg
                            transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/LD.png"  // Usando a imagem da pasta public
                  alt="Noiva"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Breve descrição sobre a personalidade única que faz parte desta história de amor.
            </p>
          </div>

          {/* Foto do noivo */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 mx-auto mb-8 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg
                            transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/LD.png"  // Usando a mesma imagem para o noivo também
                  alt="Noivo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Breve descrição sobre como os caminhos se cruzaram nesta jornada de amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCouple;
