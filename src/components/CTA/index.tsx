import Link from "next/link"

export function CTA() {
  return (
    <section className="py-12 md:py-16 bg-primary animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            Pronto para colaborar?
          </h3>
          <p className="text-white/90">
            Fale connosco e encontre a solução adequada com sobriedade e coordenação.
          </p>
        </div>
        <Link href="#contacto">
          <button className="bg-white text-primary font-bold px-6 h-10 rounded-md">
            Contactar
          </button>
        </Link>
      </div>
    </section>
  )
}
