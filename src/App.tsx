import  { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import AboutCouple from './components/AboutCouple';
import ImageCarousel from './components/ImageCarousel';
import Location from './components/Location';
import GiftList from './components/GiftList';
import PresenceConfirmation from './components/PresenceConfirmation';
import LoadingScreen from './components/loading'; // Importando a tela de carregamento
import PaymentChoice from './components/PaymentChoice'; // Tela de escolha de pagamento
import PixQRCode from './components/PixQRCode'; // Tela do QR Code do PIX

function App() {
  const [loading, setLoading] = useState(false);
  const [paymentChoice, setPaymentChoice] = useState<string | null>(null);
  const [isGiftSelected, setIsGiftSelected] = useState(false);
  const [selectedGiftLink, setSelectedGiftLink] = useState<string | null>(null);

  // Função para gerenciar o clique no presente e navegação para a escolha de pagamento
  const handleGiftClick = (link: string) => {
    setSelectedGiftLink(link); // Armazenar o link do presente selecionado
    setLoading(true); // Inicia a tela de carregamento
    setTimeout(() => {
      setLoading(false); // Termina o carregamento
      setPaymentChoice(null); // Limpa qualquer escolha anterior
      setIsGiftSelected(true); // Marca que um presente foi selecionado
    }, 1500); // Tempo de carregamento
  };

  // Função para navegar com base na escolha de pagamento
  const handlePaymentChoice = (choice: string) => {
    if (choice === 'PIX') {
      // Navega para a tela do QR Code do PIX
      setPaymentChoice('PIX');
    } else if (choice === 'Cartão de Crédito' && selectedGiftLink) {
      // Navega para o link do presente
      window.location.href = selectedGiftLink; // Usando o link selecionado
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {loading ? (
        <LoadingScreen /> // Exibe a tela de carregamento enquanto carrega
      ) : paymentChoice === null && isGiftSelected ? (
        // Se um presente foi selecionado, exibe a tela de escolha de pagamento
        <PaymentChoice onPaymentChoice={handlePaymentChoice} />
      ) : paymentChoice === 'PIX' ? (
        // Exibe a tela com QR Code do PIX
        <PixQRCode />
      ) : (
        <>
          {/* Exibe a tela principal de presentes e outros componentes */}
          <Navbar />
          <Hero />
          <Countdown targetDate="2026-10-17" />
          <AboutCouple />
          <div id="ceremony-photos">
            <ImageCarousel type="ceremony" />
          </div>
          <ImageCarousel type="moments" />
          <Location />
          <GiftList onGiftClick={handleGiftClick} /> {/* Passando a função para GiftList */}
          <PresenceConfirmation />
        </>
      )}
    </div>
  );
}

export default App;
