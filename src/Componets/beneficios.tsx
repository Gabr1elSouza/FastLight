import { useState } from 'react'
import Modal from './Modal'

interface Benefit {
  title: string
  description: string
  icon: string
  details: {
    fullDescription: string
    features: string[]
  }
}

const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null)

  const benefits: Benefit[] = [
    {
      title: "Networking",
      description: "Conexão com outros profissionais e empresas do setor",
      icon: "🤝",
      details: {
        fullDescription: "Amplie sua rede de contatos profissionais e descubra novas oportunidades de negócio através da nossa comunidade de cooperados.",
        features: [
          "Eventos exclusivos de networking",
          "Grupos de trabalho setoriais",
          "Parcerias estratégicas",
          "Encontros mensais entre cooperados",
          "Plataforma online de networking"
        ]
      }
    },
    {
      title: "Crescimento",
      description: "Oportunidades de desenvolvimento profissional",
      icon: "📈",
      details: {
        fullDescription: "Invista no seu desenvolvimento profissional e no crescimento da sua empresa com nossos programas exclusivos.",
        features: [
          "Cursos e treinamentos especializados",
          "Mentorias com profissionais experientes",
          "Acesso a certificações",
          "Programas de desenvolvimento de liderança",
          "Workshops de capacitação"
        ]
      }
    },
    {
      title: "Suporte",
      description: "Apoio técnico e administrativo para sua empresa",
      icon: "🛠️",
      details: {
        fullDescription: "Conte com nossa estrutura de suporte completa para impulsionar seu negócio e otimizar seus processos.",
        features: [
          "Consultoria jurídica especializada",
          "Suporte contábil e fiscal",
          "Assessoria em gestão empresarial",
          "Apoio em processos administrativos",
          "Help desk técnico"
        ]
      }
    },
    {
      title: "Benefícios",
      description: "Acesso a vantagens exclusivas para cooperados",
      icon: "✨",
      details: {
        fullDescription: "Aproveite benefícios exclusivos que proporcionam mais qualidade de vida e vantagens competitivas para seu negócio.",
        features: [
          "Plano de saúde empresarial",
          "Descontos em serviços parceiros",
          "Seguros com condições especiais",
          "Convênios com estabelecimentos",
          "Programas de bem-estar"
        ]
      }
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
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => setSelectedBenefit(benefit)}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedBenefit}
        onClose={() => setSelectedBenefit(null)}
        title={selectedBenefit?.title || ''}
      >
        {selectedBenefit && (
          <div>
            <p className="text-gray-700 mb-6">{selectedBenefit.details.fullDescription}</p>
            <h4 className="font-semibold text-lg mb-4">Principais características:</h4>
            <ul className="space-y-3">
              {selectedBenefit.details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Benefits