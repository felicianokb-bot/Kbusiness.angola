import { AboutSection } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Service } from "@/components/Service";
import { ProjectsExperience } from "@/components/Projects";
import { Partnerships } from "@/components/Partnerships";
import { Features } from "@/components/Features";
import { OurNumberSection } from "@/components/OurNumberSection";
import { TestemonialSection } from "@/components/TestemonialsSection";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <AboutSection/>
        <Features/>
        <Service/>
        <OurNumberSection/>
        <ProjectsExperience/>
        <Partnerships/>
        <TestemonialSection />
        <CTA/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
