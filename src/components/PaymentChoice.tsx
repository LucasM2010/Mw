import React from 'react';

interface PaymentChoiceProps {
  onPaymentChoice: (choice: string) => void;
}

const PaymentChoice: React.FC<PaymentChoiceProps> = ({ onPaymentChoice }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Escolha uma forma de pagamento</h2>
        <div className="space-y-4">
          <button
            onClick={() => onPaymentChoice('PIX')}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
          >
            PIX
          </button>
          <button
            onClick={() => onPaymentChoice('Cartão de Crédito')}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Cartão de Crédito
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentChoice;
