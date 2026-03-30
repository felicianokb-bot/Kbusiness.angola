import { LeftSection } from './ContactInfo'
import { Form } from './Form'

export function Contact() {
  return (
    <section id="contacto" className="bg-black bg-[url(/assets/contact.png)] bg-cover bg-center scroll-mt-24 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl  mx-auto flex flex-col py-16 md:py-28 xl:py-32 md:flex-row px-8 gap-14 sm:gap-16">
        <LeftSection />

        <div className="w-full shadow-lg rounded-md overflow-hidden">
          <Form />
        </div>
      </div>
    </section>
  )
}
