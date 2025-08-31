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
                Talente und Unternehmen –{' '}
                <span className="font-serif italic text-secondary">neu gedacht</span>.
              </h2>
              
              <p className="font-serif text-lg text-white/80 leading-relaxed">
                moldow. steht für Recruiting mit Haltung. Wir bringen Unternehmen und Menschen zusammen, 
                die wirklich zueinander passen – datenbasiert, persönlich und nachhaltig.
              </p>
            </div>

            {/* Key Facts */}
            <div className="pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">100+</div>
                  <div className="text-sm font-geometric text-white/70">Erfolgreiche Placements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                  <div className="text-sm font-geometric text-white/70">Zufriedenheitsrate</div>
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