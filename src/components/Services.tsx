import { useScrollReveal } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Brain, Heart, ArrowUpRight } from "lucide-react";

const Services = () => {
  useScrollReveal();

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Executive Search",
      description: "Gezielte Suche nach Führungskräften und Spezialisten für strategische Positionen mit nachweislicher Erfolgsquote.",
      feature: "95% Success Rate"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Talent Algorithmus",
      description: "Datengestützte Analyse zur präzisen Identifikation der besten Kandidaten für Ihr spezifisches Umfeld.",
      feature: "AI-Powered Matching"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kultur-Matching",
      description: "Tiefgreifende Abstimmung zwischen Unternehmenskultur und den Werten sowie Arbeitsweisen der Kandidaten.",
      feature: "Cultural Fit Analysis"
    }
  ];

  return (
    <section id="services" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Massive section title */}
        <div className="scroll-reveal mb-20">
          <div className="display-large text-white text-center mb-8">
            Services
          </div>
          <p className="editorial-subheading text-white/80 max-w-3xl mx-auto text-center">
            Drei bewährte Ansätze für nachhaltigen Recruiting-Erfolg, 
            optimiert für die moderne Arbeitswelt
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="scroll-reveal border-0 shadow-lg hover-lift bg-background/80 backdrop-blur-sm group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                {/* Service badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary smooth-transition">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-interactive group-hover:scale-110 smooth-transition" />
                </div>
                
                <h3 className="font-roc font-bold text-xl text-white mb-2 group-hover:text-secondary smooth-transition">
                  {service.title}
                </h3>
                
                <div className="inline-flex items-center px-3 py-1 bg-interactive/10 rounded-full">
                  <span className="text-xs font-geometric text-interactive font-semibold">
                    {service.feature}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="font-geometric leading-relaxed text-white/80 group-hover:text-white smooth-transition">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-interactive/0 group-hover:from-secondary/5 group-hover:to-interactive/5 smooth-transition rounded-lg" />
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;