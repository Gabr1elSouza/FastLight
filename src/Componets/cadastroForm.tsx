import React from 'react';

const CadastroForm: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h3 className="text-3xl font-semibold mb-6">Cadastre-se para ser um cooperado</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nome Completo</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Telefone</label>
          <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </section>
  );
};

export default CadastroForm;
