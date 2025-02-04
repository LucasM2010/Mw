

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 font-serif">Localização</h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          {/* Tornando a imagem clicável e redirecionando para o link do Google Maps */}
          <a 
            href="https://www.google.com/maps/place/Ponteio+Churrascaria/@-8.1301618,-34.9054789,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1f0655555555:0x831f0c5fa66b8385!8m2!3d-8.1301618!4d-34.902904!16s%2Fg%2F1pzt9829g?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src="/localizacao.png"  // Caminho para a imagem
              alt="Localização"
              className="w-full h-96 object-cover" // Ajuste o tamanho da imagem conforme necessário
            />
          </a>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">Ponteio Churrascaria</p>
          <p className="text-gray-600">Av. Visc. de Jequitinhonha, 138 - Boa Viagem, Recife - PE, 51030-020</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
