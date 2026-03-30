import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function DrawerMenu() {
    return (
        <Sheet>
            <SheetTrigger className="w-8 h-8 flex items-center justify-center rounded-md">
            <button className="hover:bg-white/20 p-1 cursor-pointer rounded-md">
                <MenuIcon size={32} className="text-primary"/>
              </button>
            </SheetTrigger>
            <SheetContent className="bg-black px-8 border-0">
                <SheetHeader>
                    <SheetTitle className="text-white">Menu</SheetTitle>
                    
                </SheetHeader>
                <nav className="mt-10">
                    <ul className="flex flex-col gap-4 text-white">
                        <li className="hover:text-primary">
                            <Link href="/#quem-somos">Quem Somos</Link>
                        </li>

                        <li  className="hover:text-primary">
                            <Link href="/#areas">Áreas de atuação</Link>
                        </li>

                        <li className="hover:text-primary">
                            <Link href="/#projetos">Projetos &amp; Experiência</Link>
                        </li>

                        <li className="hover:text-primary">
                            <Link href="/#parcerias">Parcerias</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/#contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
