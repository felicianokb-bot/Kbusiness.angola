import { SectionHeader } from "../SectionHeader"
import { SectionCard } from "../SectionCard"

export function ProjectsExperience() {
  return (
    <section id="projetos" className="py-16 md:py-24 lg:py-28 xl:py-32 bg-white scroll-mt-24 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl px-8 w-full flex flex-col items-center mx-auto">
        <SectionHeader
          label="Projetos & Experiência"
          title="Atuação e experiência coordenada"
          description={
            <p className="text-sm md:text-base text-gray-700">
              Experiência construída com foco em coordenação, conformidade e execução responsável
              em iniciativas de Water Solutions, Soluções Agrícolas, Comunicação e Consultoria.
              A nossa abordagem privilegia clareza, sobriedade e impacto real.
            </p>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <SectionCard
            title="Water Solutions"
            image="/assets/2.png"
            description={
              <p>
                Apoio técnico e coordenação em qualidade da água, higienização de reservatórios e
                avaliação de soluções adequadas a infraestruturas compactas.
              </p>
            }
          />
          <SectionCard
            title="Soluções Agrícolas"
            image="/assets/banner1.jpg"
            description={
              <p>
                Orientação objetiva para disponibilização e uso de fertilizantes, adubos e insumos técnicos,
                com ligação estruturada entre necessidades e fornecedores.
              </p>
            }
          />
          <SectionCard
            title="Comunicação, Imagem & Gráfica"
            image="/assets/banner2.jpg"
            description={
              <p>
                Identidade visual e materiais gráficos com consistência e clareza, articulando parceiros
                especializados ao longo de todo o ciclo de produção.
              </p>
            }
          />
          <SectionCard
            title="Consultoria & Assessoria"
            image="/assets/about.jpg"
            description={
              <p>
                Diagnóstico, coordenação e suporte à conformidade com foco em execução responsável
                e decisões bem informadas.
              </p>
            }
          />
        </div>

      </div>
    </section>
  )
}
