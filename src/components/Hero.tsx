import { useScrollReveal } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useScrollReveal();

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20" />
      
      {/* Floating elements for subtle animation */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="moldow-logo text-4xl mb-16 scroll-reveal">
            moldow.
          </div>
          
          {/* Main Content */}
          <div className="space-y-12">
            {/* Headline */}
            <div className="scroll-reveal">
              <h1 className="font-geometric font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-white tracking-tight">
                Es gibt einen Unterschied zwischen{' '}
                <span className="italic font-serif text-secondary">Suchen</span>{' '}
                und{' '}
                <span className="italic font-serif text-secondary">Finden</span>.
              </h1>
            </div>
            
            {/* Subheadline */}
            <div className="scroll-reveal">
              <div className="w-16 h-px bg-secondary mb-6" />
              <p className="font-serif text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Wir verbinden Unternehmen mit außergewöhnlichen Talenten.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 scroll-reveal pt-8">
              <Button className="interactive-button px-8 py-4 text-lg font-geometric font-semibold">
                Talente finden
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;