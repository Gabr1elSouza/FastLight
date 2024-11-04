const Benefits = () => {
  const benefits = [
    {
      title: "Networking",
      description: "Conexão com outros profissionais e empresas do setor",
      icon: "🤝"
    },
    {
      title: "Crescimento",
      description: "Oportunidades de desenvolvimento profissional",
      icon: "📈"
    },
    {
      title: "Suporte",
      description: "Apoio técnico e administrativo para sua empresa",
      icon: "🛠️"
    },
    {
      title: "Benefícios",
      description: "Acesso a vantagens exclusivas para cooperados",
      icon: "✨"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefícios de ser um Cooperado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits