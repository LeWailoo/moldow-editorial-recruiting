import { useScrollReveal } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  useScrollReveal();

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-interactive/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="display-large text-secondary mb-8">
            Ready?
          </div>
          
          <h2 className="editorial-heading text-white mb-8 text-3xl md:text-5xl">
            Bereit für außergewöhnliche Talente?
          </h2>
          
          <p className="editorial-subheading text-white/90 mb-12 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die Menschen finden, die Ihr Unternehmen 
            auf das nächste Level bringen. Kostenlose Erstberatung inklusive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-secondary text-primary px-12 py-4 rounded-full font-geometric font-bold text-lg hover:scale-105 smooth-transition shadow-2xl flex items-center gap-3">
              Kostenloses Gespräch vereinbaren
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  S
                </div>
                <div className="w-10 h-10 bg-interactive rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  A
                </div>
              </div>
              <span className="font-geometric text-sm">
                50+ CEOs vertrauen moldow.
              </span>
            </div>
          </div>

          {/* Contact info quick access */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-white/80">
              <div>
                <div className="font-roc font-bold text-secondary mb-2">Email</div>
                <a href="mailto:hello@moldow.de" className="font-geometric hover:text-secondary smooth-transition">
                  hello@moldow.de
                </a>
              </div>
              <div>
                <div className="font-roc font-bold text-secondary mb-2">Telefon</div>
                <a href="tel:+49211123456" className="font-geometric hover:text-secondary smooth-transition">
                  +49 211 123 456
                </a>
              </div>
              <div>
                <div className="font-roc font-bold text-secondary mb-2">Response Zeit</div>
                <div className="font-geometric">
                  &lt; 24h garantiert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;