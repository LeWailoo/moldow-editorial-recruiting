import { useScrollReveal } from "@/hooks/use-scroll-animation";
import teamImage from "@/assets/team-workspace.jpg";

const About = () => {
  useScrollReveal();

  return (
    <section id="about" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="display-large text-primary mb-8">
            Mission
          </div>
          <p className="editorial-subheading text-muted-foreground max-w-3xl mx-auto">
            Bei moldow. verstehen wir, dass außergewöhnliche Unternehmen außergewöhnliche Menschen brauchen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-6">
              <h2 className="editorial-heading text-primary text-3xl md:text-4xl">
                Unser Ansatz geht über traditionelle Recruiting-Methoden hinaus
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir kombinieren menschliche Intuition mit datengestützten Insights, 
                um die perfekte Passung zwischen Talent und Kultur zu schaffen.
              </p>
              
              <p className="font-geometric text-foreground/80 leading-relaxed">
                Unser Team investiert Zeit, um sowohl Ihre Unternehmenskultur als auch 
                die Aspirationen der Kandidaten tiefgreifend zu verstehen. Das Ergebnis: 
                nachhaltige Erfolge für beide Seiten.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">15+ Jahre</div>
                <div className="text-sm text-muted-foreground">Erfahrung im Executive Search</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Kandidaten-Zufriedenheit</div>
              </div>
            </div>
          </div>
          
          {/* Right: Image with modern treatment */}
          <div className="relative scroll-reveal">
            <div className="relative group">
              <img 
                src={teamImage} 
                alt="moldow. Team bei der strategischen Planung"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl group-hover:scale-105 smooth-transition"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary px-6 py-3 rounded-full font-geometric font-bold shadow-xl">
                Award-winning Team
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-interactive/20 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;