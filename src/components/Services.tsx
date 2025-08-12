import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Brain, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Executive Search",
      description: "Gezielte Suche nach Führungskräften und Spezialisten für strategische Positionen."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Talent Algorithmus",
      description: "Datengestützte Analyse zur Identifikation der besten Kandidaten für Ihr Unternehmen."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kultur-Matching",
      description: "Präzise Abstimmung zwischen Unternehmenskultur und den Werten der Kandidaten."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="editorial-heading text-primary mb-8 text-3xl md:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="editorial-subheading text-muted-foreground max-w-2xl mx-auto">
            Drei bewährte Ansätze für nachhaltigen Recruiting-Erfolg
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover-lift bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-accent mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-geometric text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-geometric text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;