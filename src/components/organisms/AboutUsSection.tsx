import { Button } from "../atoms/Button";

interface AboutUsSectionProps {
  companyName: string;
  tagline: string;
  paragraphs: string[];
  imageUrl: string;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ companyName, tagline, paragraphs, imageUrl }) => {
  return (
    <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in">
        Sobre {companyName}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={imageUrl} alt="Equipo PrintForge 3D" className="rounded-xl shadow-lg w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{tagline}</h3>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <Button variant="accent" className="mt-4">Conocer Más</Button>
        </div>
      </div>
    </section>
  );
};
