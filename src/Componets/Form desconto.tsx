import React from 'react';

const FormularioDesconto: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4">Calcule seu desconto</h3>
      <form className="space-y-4">
        <div className="flex gap-4">
          <input type="text" placeholder="Seu nome" className="w-full p-2 border rounded-lg text-gray-600"/>
          <input type="text" placeholder="Seu sobrenome" className="w-full p-2 border rounded-lg text-gray-600"/>
        </div>
        <input type="email" placeholder="Seu e-mail" className="w-full p-2 border rounded-lg text-gray-600"/>
        <div className="flex gap-4">
          <input type="tel" placeholder="55DD999999999" className="w-full p-2 border rounded-lg text-gray-600"/>
          <input type="text" placeholder="Seu estado" className="w-full p-2 border rounded-lg text-gray-600"/>
        </div>
        <input type="text" placeholder="Seu gasto em sua conta de luz por mês" className="w-full p-2 border rounded-lg text-gray-600"/>
        <div className="flex gap-4">
          <select className="w-full p-2 border rounded-lg text-gray-600">
            <option>Economize</option>
          </select>
          <select className="w-full p-2 border rounded-lg text-gray-600">
            <option>Concessionária</option>
          </select>
        </div>
        <div className="flex gap-4">
          <select className="w-full p-2 border rounded-lg text-gray-600">
            <option>Como soube de nós?</option>
          </select>
          <input type="text" placeholder="Código promocional" className="w-full p-2 border rounded-lg text-gray-600"/>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Calcular</button>
      </form>
    </section>
  );
};

export default FormularioDesconto;
