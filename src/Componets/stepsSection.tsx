const Steps = () => {
  const steps = [
    {
      number: "1",
      title: "Preencha o Formulário",
      description: "Complete o cadastro inicial com suas informações"
    },
    {
      number: "2",
      title: "Análise Documental",
      description: "Envie os documentos necessários para análise"
    },
    {
      number: "3",
      title: "Aprovação",
      description: "Aguarde a aprovação do seu cadastro"
    },
    {
      number: "4",
      title: "Seja Bem-vindo",
      description: "Comece a aproveitar os benefícios da cooperativa"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Como se tornar um Cooperado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 ">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-16 w-full border-t-2 border-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps