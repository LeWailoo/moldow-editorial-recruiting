import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="editorial-heading text-secondary mb-8 text-3xl md:text-5xl">
            Bereit für außergewöhnliche Talente?
          </h2>
          
          <p className="editorial-subheading text-white/90 mb-12">
            Lassen Sie uns gemeinsam die Menschen finden, die Ihr Unternehmen voranbringen.
          </p>
          
          <Button 
            size="lg" 
            className="bg-secondary text-primary font-geometric font-semibold hover:bg-secondary/90 px-12"
          >
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;