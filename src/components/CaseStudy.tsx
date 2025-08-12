import { useScrollReveal } from "@/hooks/use-scroll-animation";
import { Quote, Star } from "lucide-react";

const CaseStudy = () => {
  useScrollReveal();

  return (
    <section id="cases" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 scroll-reveal">
            <div className="display-large text-primary mb-8">
              Success
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Testimonial */}
            <div className="space-y-8 scroll-reveal">
              <div className="flex items-center gap-3 mb-8">
                <Quote className="w-8 h-8 text-secondary" />
                <span className="font-geometric font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Client Story
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <h3 className="editorial-heading text-3xl md:text-4xl text-primary leading-tight">
                  "In nur 4 Wochen zur perfekten Besetzung einer C-Level Position"
                </h3>
                
                <blockquote className="editorial-subheading text-muted-foreground text-xl leading-relaxed">
                  "moldow. hat nicht nur verstanden, was wir suchten, sondern auch, 
                  wer wir als Unternehmen sind. Der gefundene Kandidat übertrifft unsere 
                  Erwartungen und passt perfekt zu unserer Kultur und Vision."
                </blockquote>
              </div>

              <div className="border-l-4 border-secondary pl-6 bg-secondary/5 py-4 rounded-r-lg">
                <p className="font-roc font-bold text-primary text-lg">Sarah Müller</p>
                <p className="font-geometric text-muted-foreground">CEO & Founder, TechInnovate GmbH</p>
                <p className="font-geometric text-sm text-muted-foreground mt-1">Series B Startup, 150+ Mitarbeiter</p>
              </div>
            </div>
            
            {/* Right: Metrics & Results */}
            <div className="scroll-reveal">
              <div className="relative bg-gradient-to-br from-interactive/5 via-secondary/5 to-background rounded-3xl p-12 border border-border/50 hover-lift">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h4 className="font-roc font-bold text-2xl text-primary mb-2">
                      Projekt Highlights
                    </h4>
                    <p className="text-muted-foreground font-geometric">
                      CTO-Position für Tech Startup
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-interactive">4</div>
                      <div className="text-sm text-muted-foreground">Wochen</div>
                      <div className="text-xs text-muted-foreground">bis zur Zusage</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-secondary">15</div>
                      <div className="text-sm text-muted-foreground">Kandidaten</div>
                      <div className="text-xs text-muted-foreground">vorgestellt</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-interactive">100%</div>
                      <div className="text-sm text-muted-foreground">Cultural Fit</div>
                      <div className="text-xs text-muted-foreground">nach 6 Monaten</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-secondary">€</div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                      <div className="text-xs text-muted-foreground">bereits nach 3 Mon.</div>
                    </div>
                  </div>
                  
                  {/* Challenge & Solution */}
                  <div className="space-y-6 pt-8 border-t border-border">
                    <div>
                      <h5 className="font-roc font-bold text-primary mb-2">Challenge</h5>
                      <p className="text-sm text-muted-foreground">
                        Sehr spezifisches Tech-Profil mit Startup-Erfahrung in der Wachstumsphase
                      </p>
                    </div>
                    <div>
                      <h5 className="font-roc font-bold text-primary mb-2">Solution</h5>
                      <p className="text-sm text-muted-foreground">
                        Talent Algorithmus + direkter Approach von Senior-Level Kandidaten
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-interactive/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;