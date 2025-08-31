import { useScrollReveal } from "@/hooks/use-scroll-animation";
import teamImage from "@/assets/team-workspace.jpg";

const About = () => {
  useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative scroll-reveal">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="moldow. Team - Recruiting mit Haltung"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Warm overlay for filmlook */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-background/30 rounded-2xl" />
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="space-y-8 scroll-reveal lg:pl-8">
            {/* Section Label */}
            <div className="space-y-6">
              <div>
                <span className="font-geometric text-sm uppercase tracking-wider text-secondary">
                  Unsere Mission
                </span>
                <div className="w-12 h-px bg-secondary mt-3" />
              </div>
              
              <h2 className="font-geometric font-bold text-4xl md:text-5xl text-white leading-tight">
                Wir hören zu –{' '}
                <span className="font-serif italic text-secondary">bevor wir verbinden</span>.
              </h2>
              
              <p className="font-serif text-lg text-white/80 leading-relaxed mb-8">
                Wir bringen Unternehmen und Menschen zusammen, 
                die wirklich zueinander passen
              </p>

              {/* Services Overview */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-geometric font-semibold text-white mb-2">Top-Talente finden</h3>
                    <p className="font-serif text-white/70 leading-relaxed">
                      Durch Active Sourcing & gezielte Direktansprache auf LinkedIn identifizieren wir 
                      hochqualifizierte Fach- und Führungskräfte.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-geometric font-semibold text-white mb-2">Effiziente HR-Strukturen schaffen</h3>
                    <p className="font-serif text-white/70 leading-relaxed">
                      Mit individuellen HR Solutions analysieren wir den Personalbedarf und 
                      optimieren die Prozesse unserer Kunden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;