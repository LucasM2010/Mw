import React, { useEffect, useState } from 'react';
import App from '../App'; // Ajuste o caminho do App.tsx conforme necessário

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Tempo de carregamento de 1,5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <App />; // Redireciona para o App após o carregamento
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Logo com sua imagem */}
        <img
          src="/image.png"  // Caminho correto para a imagem dentro da pasta public
          alt="Logo"
          className="w-32 h-auto animate-pulse"
        />
        {/* Linha de carregamento */}
        <div className="w-64 h-2 mt-8 bg-gray-200 rounded-full overflow-hidden relative">
          <div className="absolute h-full bg-blue-500 animate-loading-bar"></div> {/* Linha azul animada */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
