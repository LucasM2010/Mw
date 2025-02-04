import React, { useState } from 'react';

const PresenceConfirmation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="confirmation" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 font-serif">Confirmação de Presença</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem (opcional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-300 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors"
          >
            Confirmar Presença
          </button>
        </form>
      </div>
    </section>
  );
};

export default PresenceConfirmation;
