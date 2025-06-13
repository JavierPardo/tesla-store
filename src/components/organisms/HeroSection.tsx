import { Button } from "../atoms/Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaOnClick: () => void;
  imageUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaOnClick, imageUrl }) => {
  return (
    <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-center shadow-inner"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Superposición oscura */}
      <div className="relative z-10 text-white p-6 rounded-lg max-w-3xl animate-fade-in-down">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">{title}</h2>
        <p className="text-xl font-light mb-6">{subtitle}</p>
        <Button variant="secondary" onClick={ctaOnClick} className="px-8 py-4 text-xl font-bold">
          {ctaText}
        </Button>
      </div>
    </section>
  );
};
