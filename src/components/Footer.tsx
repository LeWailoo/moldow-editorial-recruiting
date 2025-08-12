import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="moldow-logo text-2xl">
              moldow.
            </div>
            <p className="font-geometric text-white/80 leading-relaxed">
              Connecting exceptional companies with exceptional talent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center smooth-transition hover:bg-secondary hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center smooth-transition hover:bg-secondary hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-geometric font-semibold text-lg">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-geometric text-sm text-white/80">
                  Münsterstraße 123<br />
                  40476 Düsseldorf
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-geometric text-sm text-white/80">
                  hello@moldow.de
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-geometric text-sm text-white/80">
                  +49 211 123 456 78
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-geometric font-semibold text-lg">Services</h4>
            <div className="space-y-3">
              <a href="#" className="block font-geometric text-sm text-white/80 smooth-transition hover:text-secondary">
                Executive Search
              </a>
              <a href="#" className="block font-geometric text-sm text-white/80 smooth-transition hover:text-secondary">
                Talent Algorithmus
              </a>
              <a href="#" className="block font-geometric text-sm text-white/80 smooth-transition hover:text-secondary">
                Kultur-Matching
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-geometric text-sm text-white/60">
            © 2024 moldow. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;