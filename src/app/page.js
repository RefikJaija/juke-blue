import HeroSection from '@/components/HeroSection';
import NavGrid from '@/components/NavGrid';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="nav-grid" className="scroll-mt-20">
        {/* Adds scroll margin */}
        <NavGrid />
      </section>
    </div>
  );
}
