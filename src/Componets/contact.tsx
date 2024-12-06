const Contact = () => {
  return (
    <section className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Entre em Contato
          </h2>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Empresa</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact