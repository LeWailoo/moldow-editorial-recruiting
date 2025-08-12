import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="moldow-logo mb-8 text-4xl md:text-5xl">
          moldow.
        </div>
        
        <h1 className="editorial-heading text-white mb-6">
          Es gibt einen Unterschied zwischen Suchen und Finden.
        </h1>
        
        <p className="editorial-subheading text-white/90 mb-12 max-w-2xl mx-auto">
          Wir verbinden Unternehmen mit außergewöhnlichen Talenten.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary text-primary font-geometric font-semibold hover:bg-secondary/90">
            Talente finden
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Über uns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;