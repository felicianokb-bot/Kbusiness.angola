import {
  LucideMail,
  LucideMapPin,
  LucidePhone
} from 'lucide-react'
import { SectionHeader } from '../../SectionHeader'

export async function LeftSection() {

  return (
    <div className="w-full">
      <div className="flex-1 flex flex-col gap-8">
        <SectionHeader
          label="Contacto"
          title="Nós adoraríamos ajudar"
          align="left"
          description={
            <p className="text-white">
              Fale connosco — estamos sempre disponíveis para apoiar, orientar e colaborar no que for preciso.
            </p>
          }
        />

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-none rounded-md bg-primary text-white flex items-center justify-center">
            <LucideMapPin />
          </div>
          <div className="flex flex-col">
            <p className='text-lg text-white'>Rua do 1º Congresso do MPLA, Edifício CIF LUANDA TWO, 9º Piso, Luanda - Angola</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-none rounded-md bg-primary text-white flex items-center justify-center">
            <LucidePhone />
          </div>
          <div className="flex flex-col">
            <p className='text-lg text-white'>+244 931 531 400</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-none rounded-md bg-primary text-white flex items-center justify-center">
            <LucideMail />
          </div>
          <div className="flex flex-col">
            <p className='text-lg text-white'>geral@kbusiness.co.ao</p>
            
          </div>
        </div>

        
      </div>

      
    </div>
  )
}
