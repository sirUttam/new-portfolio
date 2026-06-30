import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import FloatingGitHubButton from '@components/FloatingGitHubButton';
import HeroSection from '@sections/HeroSection';
import SkillsSection from '@sections/SkillsSection';
import ProjectsSection from '@sections/ProjectsSection';
import ContactSection from '@sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container pt-28">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <div className="container mt-12">
        <Footer />
      </div>
      <FloatingGitHubButton href="https://github.com/sirUttam" />
    </>
  );
}
