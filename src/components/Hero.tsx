import { useScrollAnimation, useScrollReveal } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const scrollY = useScrollAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useScrollReveal();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Background animated elements */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-interactive/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Massive Typography */}
          <div className="space-y-8 text-overlap">
            <div className="moldow-logo text-4xl mb-8 scroll-reveal">
              moldow.
            </div>
            
            {/* Massive display text like Power Digital */}
            <div className="relative scroll-reveal">
              <h1 className="display-massive uppercase leading-none">
                Find
              </h1>
              <div 
                className="absolute -right-4 top-1/2 -translate-y-1/2 text-2xl md:text-4xl font-geometric text-muted-foreground"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              >
                not search
              </div>
            </div>
            
            <div className="scroll-reveal">
              <p className="editorial-subheading text-muted-foreground max-w-lg mb-8">
                Es gibt einen Unterschied zwischen Suchen und Finden. 
                Wir verbinden Unternehmen mit außergewöhnlichen Talenten durch 
                präzise Analyse und kulturelle Passung.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 scroll-reveal">
              <Button className="interactive-button flex items-center gap-3">
                Start now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="flex items-center gap-3 group">
                <Play className="w-5 h-5 group-hover:scale-110 smooth-transition" />
                Watch story
              </Button>
            </div>
          </div>

          {/* Right: Interactive Content */}
          <div className="relative scroll-reveal">
            <div className="relative bg-gradient-to-br from-secondary/10 to-interactive/10 rounded-3xl p-12 backdrop-blur-sm border border-border/50 hover-lift">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="font-geometric text-sm uppercase tracking-wider text-muted-foreground">
                    World-class recruiting
                  </span>
                </div>
                
                <h3 className="display-large text-3xl text-primary mb-6">
                  A tech-enabled growth recruiting agency
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-interactive">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-interactive">4 Wo</div>
                    <div className="text-sm text-muted-foreground">Avg. Time</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-interactive">500+</div>
                    <div className="text-sm text-muted-foreground">Placements</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-interactive">50+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  transition: 'transform 0.5s ease-out'
                }}
              />
              <div 
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-interactive/20 rounded-full blur-sm"
                style={{
                  transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
                  transition: 'transform 0.7s ease-out'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;