import { SectionHeader } from "../SectionHeader"
import { SectionCard } from "../SectionCard"
import { PartnersLogos } from "../PartnersLogos"

export function Partnerships() {
  return (
    <section id="parcerias" className="py-16 md:py-24 lg:py-28 xl:py-32 bg-gray-100 scroll-mt-24 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl px-8 w-full flex flex-col items-center mx-auto">
        <SectionHeader
          label="Parcerias"
          title="Colaboração com sobriedade e confiança"
          description={
            <p className="text-sm md:text-base text-gray-700">
              Parcerias estruturadas com entidades e fornecedores especializados, baseadas em
              confiança, transparência e execução responsável.
            </p>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <SectionCard
            image="/assets/1.jpg"
            title="Instituições e Setor Público"
            description={<p>Articulação institucional, suporte a requisitos e conformidade.</p>}
          />
          <SectionCard
            image="/assets/2.png"
            title="Fornecedores e Operadores"
            description={<p>Coordenação de disponibilização e execução técnica com qualidade.</p>}
          />
          <SectionCard
            image="/assets/5.JPG"
            title="Parceiros Especializados"
            description={<p>Integração de competências em comunicação, água e agricultura.</p>}
          />
        </div>
        <PartnersLogos />

      </div>
    </section>
  )
}
