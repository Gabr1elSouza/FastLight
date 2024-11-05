const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quero ser Cooperado
            </h1>
            <p className="text-xl mb-8">
              Faça parte da nossa cooperativa e tenha acesso a benefícios exclusivos para você e sua empresa
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Saiba Mais
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/Imagem neutra.jpg" 
              alt="Cooperados Cogecom" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero