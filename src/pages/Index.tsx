import About from '@/components/About';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import SectionGitHubStats from '@/components/GitHubStats';
import SectionHero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import SectionProjects from '@/components/Project';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SectionHero />
        <About />
        <SectionProjects />
        <SectionGitHubStats />
        <Articles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
