import React from 'react';

const PixQRCode: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Pague via PIX</h2>
        <img
          src="qr.jpeg"
          alt="QR Code do PIX"
          className="w-48 h-48 mx-auto mb-6"
        />
        <p className="text-gray-700">Aponte seu celular para o QR Code para realizar o pagamento via PIX.</p>
      </div>
    </div>
  );
};

export default PixQRCode;
