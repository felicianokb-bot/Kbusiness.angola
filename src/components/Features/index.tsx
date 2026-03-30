import { ShieldCheck, Workflow, Gauge, Handshake } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Rigor e conformidade",
    description: "Abordagem técnica com foco em requisitos e boas práticas.",
  },
  {
    icon: Workflow,
    title: "Coordenação eficiente",
    description: "Integração de stakeholders e fornecimento de ponta a ponta.",
  },
  {
    icon: Gauge,
    title: "Eficiência",
    description: "Soluções adequadas à realidade local, com execução responsável.",
  },
  {
    icon: Handshake,
    title: "Parcerias confiáveis",
    description: "Rede de parceiros especializados e atuação sobriedade.",
  },
]

export function Features() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div key={feat.title} className="rounded-xl border border-gray-200 shadow-xs bg-white p-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="size-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">{feat.title}</h4>
                <p className="text-gray-600 text-sm">{feat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
