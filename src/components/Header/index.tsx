'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DrawerMenu } from "./Drawer"
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('#quem-somos')

  const links = [
    { href: '#quem-somos', name: 'Quem Somos' },
    { href: '#areas', name: 'Áreas de atuação' },
    { href: '#projetos', name: 'Projetos & Experiência' },
    { href: '#parcerias', name: 'Parcerias' },
    { href: '#contacto', name: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    // Set initial state
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['quem-somos', 'areas', 'projetos', 'parcerias', 'contacto']
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }, { rootMargin: '0px 0px -40% 0px', threshold: 0.4 })

    sections.forEach(sec => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col bg-cover relative">
      <header
        className={cn(
          "w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white shadow-md border-gray-200 py-3"
            : "bg-transparent border-transparent pt-24 pb-5 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/">
            <Image
              src={isScrolled ? "/logo.svg" : "/logowhite.svg"}
              alt="KBusiness logo"
              width={isScrolled ? 150 : 180}
              height={40}
              className={cn(
                "transition-all duration-300 h-8 w-auto sm:h-10",
                !isScrolled && "sm:mt-4",
              )}
            />
          </Link>
          
          <nav className="md:flex items-center hidden" aria-label="Navegação principal">
            <ul className="flex gap-6">
              {links.map((link) => (
                <li
                  key={link.href}
                  className={cn(
                    "text-lg font-sans font-bold transition-colors",
                    isScrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-primary",
                    activeSection === link.href ? "text-primary" : ""
                  )}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <div className="hidden md:flex">
              <Link href="#contacto">
                  <button className="bg-primary h-10 ml-10 rounded-md flex items-center justify-center text-white px-8 font-bold uppercase">
                    CONTACTAR
                  </button>
              </Link>
            </div>
            <div className="block z-10 md:hidden">
                <DrawerMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Static Hero Section */}
      <div className="w-full h-auto md:h-[720px] relative">
        <Image src="/assets/1.jpg" alt="Banner KBusiness" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-slate-700/60 z-10" />
        <div className="max-w-6xl mx-auto px-8 relative z-20 pt-48 pb-16 md:pb-20 h-full flex items-center justify-center md:justify-start">
          <div className="md:max-w-[795px] w-full text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold uppercase leading-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
              Parceiro estratégico, visão integrada e coordenação de soluções
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-in fade-in slide-in-from-bottom-12 duration-700">
              <Link href="#contacto">
                <button className="bg-primary uppercase font-bold cursor-pointer duration-300 hover:bg-primary/80 font-sans h-12 rounded-md flex items-center justify-center text-white px-8 w-full sm:w-auto">
                  Fale connosco
                </button>
              </Link>
              <Link href="#quem-somos">
                <button className="border-2 font-sans text-lg cursor-pointer uppercase transition-colors hover:bg-white hover:text-primary hover:border-white border-white font-bold h-12 rounded-md flex items-center justify-center text-white px-8 w-full sm:w-auto">
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
