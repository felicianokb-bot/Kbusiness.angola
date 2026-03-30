import Link from "next/link"
import { LucideMail, LucidePhone } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full bg-black/70 text-white">
      <div className="max-w-7xl mx-auto px-8 py-2 flex flex-col sm:flex-row items-center justify-between text-sm gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <LucidePhone className="size-4 text-primary" />
            <span>+244 931 531 400</span>
          </div>
          <div className="flex items-center gap-2">
            <LucideMail className="size-4 text-primary" />
            <span>geral@kbusiness.co.ao</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#parcerias" className="hover:text-primary">Parcerias</Link>
          <Link href="#contacto" className="hover:text-primary">Contacto</Link>
        </div>
      </div>
    </div>
  )
}
