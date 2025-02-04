import React from 'react';
import Slider from 'react-slick'; // Importa o Slider do react-slick
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

interface ImageCarouselProps {
  type: 'moments' | 'ceremony';
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ type }) => {
  // Selecione as imagens conforme o tipo
  const images = type === 'moments'
    ? ['/LD.png', '/LD.png', '/LD.png'] // Usando a mesma imagem LD.png para todos
    : ['/LD.png', '/LD.png', '/LD.png']; // Usando a mesma imagem LD.png para todos também

  // Configurações do carrossel
  const settings = {
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Carrossel infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Exibe 1 slide por vez
    slidesToScroll: 1, // Move 1 slide por vez
    arrows: true, // Exibe as setas para navegação
    autoplay: true, // Faz com que o carrossel avance automaticamente
    autoplaySpeed: 3000, // Define a velocidade do autoplay
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <h2 className="absolute top-16 left-1/2 transform -translate-x-1/2 text-4xl text-center font-serif text-white mb-12 z-10">
          {type === 'moments' ? 'Nossos Momentos' : 'A Cerimônia'}
        </h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageCarousel;
