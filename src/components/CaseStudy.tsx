import { Quote } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-8 h-8 text-accent" />
                <span className="font-geometric font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Erfolgsgeschichte
                </span>
              </div>
              
              <h3 className="editorial-heading text-3xl text-primary">
                "In nur 4 Wochen zur perfekten Besetzung"
              </h3>
              
              <p className="editorial-subheading text-muted-foreground">
                "moldow. hat nicht nur verstanden, was wir suchten, sondern auch, 
                wer wir als Unternehmen sind. Der gefundene Kandidat passt perfekt 
                zu unserer Kultur und Vision."
              </p>
              
              <div className="border-l-4 border-secondary pl-6">
                <p className="font-geometric font-semibold text-primary">Sarah Müller</p>
                <p className="font-geometric text-sm text-muted-foreground">CEO, TechInnovate GmbH</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="font-geometric text-muted-foreground">Erfolgsquote</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;