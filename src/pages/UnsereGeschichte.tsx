import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UnsereGeschichte = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Hero section */}
            <div className="text-center mb-20">
              <h1 className="display-large text-secondary mb-8">
                Unsere Geschichte
              </h1>
            </div>

            {/* Content grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/lovable-uploads/d57c3260-b45b-4d64-b71f-f7e2ec55a7f3.png" 
                    alt="Ioanna Chantzou und Sophia Lück Moldow, Gründerinnen von Moldow Identity"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-6">
                  <p className="editorial-subheading text-white/90 leading-relaxed">
                    Wir sind Ioanna Chantzou und Sophia Lück Moldow, die Gründerinnen von Moldow Identity.
                  </p>
                  <p className="font-geometric text-white/80 leading-relaxed">
                    Unsere Vision ist es, Recruiting und HR-Lösungen für die Immobilienbranche neu zu denken – mit Substanz, Haltung und einem tiefen Verständnis für das, was Menschen und Unternehmen wirklich verbindet.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-roc font-bold text-2xl text-white">
                    Unsere Erfahrungen ergänzen sich perfekt.
                  </h2>
                  <div className="space-y-4">
                    <p className="font-geometric text-white/80 leading-relaxed">
                      Sophia bringt über vier Jahre im Recruiting mit und hat in dieser Zeit ein starkes Netzwerk aufgebaut. Sie versteht, wie man die richtigen Menschen zusammenführt und wertvolle Synergien schafft.
                    </p>
                    <p className="font-geometric text-white/80 leading-relaxed">
                      Ioanna hat Betriebswirtschaftslehre studiert und über viele Jahre in der Immobilienbranche gearbeitet. Dieses Know-how gibt ihr einen klaren Blick für die Anforderungen, die Unternehmen und Kandidaten bewegen.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-geometric text-white/80 leading-relaxed">
                    Der Name „Moldow" ist eine Hommage an Steffen Moldow, Unternehmer, Visionär und Impulsgeber. Er hat uns vorgelebt, was es heißt, mit Mut, Verantwortung und Weitblick Neues aufzubauen.
                  </p>
                  <p className="font-geometric text-white/80 leading-relaxed">
                    Mit Moldow Identity bündeln wir unsere Stärken und schaffen Lösungen, die über klassische Personalvermittlung hinausgehen. Recruiting, HR-Strategien und Employer Branding – immer mit dem Ziel, nachhaltige Verbindungen zu schaffen, die bleiben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UnsereGeschichte;