import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="moldow-logo text-4xl">
              moldow.
            </div>
            <p className="font-geometric text-white/80 leading-relaxed text-lg max-w-md">
              We believe in quality over quantity, in details over shortcuts, and in relationships over transactions.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center smooth-transition hover:bg-secondary hover:text-primary group border border-white/10"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center smooth-transition hover:bg-secondary hover:text-primary group border border-white/10"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="font-roc font-bold text-xl text-secondary">Services</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 font-geometric text-white/80 smooth-transition hover:text-secondary group">
                Executive Search
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>
              <a href="#" className="flex items-center gap-2 font-geometric text-white/80 smooth-transition hover:text-secondary group">
                Talent Algorithmus
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>
              <a href="#" className="flex items-center gap-2 font-geometric text-white/80 smooth-transition hover:text-secondary group">
                Kultur-Matching
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>
              <a href="#" className="flex items-center gap-2 font-geometric text-white/80 smooth-transition hover:text-secondary group">
                Retention Consulting
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>
            </div>
          </div>
          
          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-roc font-bold text-xl text-secondary">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div className="font-geometric text-white/80 leading-relaxed">
                  <div>Königsallee 92</div>
                  <div>40212 Düsseldorf</div>
                </div>
              </div>
              <a 
                href="mailto:hello@moldow.de" 
                className="flex items-center gap-3 font-geometric text-white/80 smooth-transition hover:text-secondary group"
              >
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 smooth-transition" />
                hello@moldow.de
              </a>
              <a 
                href="tel:+49211123456" 
                className="flex items-center gap-3 font-geometric text-white/80 smooth-transition hover:text-secondary group"
              >
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 smooth-transition" />
                +49 211 123 456 78
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-geometric text-white/60 text-sm">
            © 2024 moldow. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="font-geometric text-white/60 hover:text-secondary smooth-transition text-sm">
              Datenschutz
            </a>
            <a href="#" className="font-geometric text-white/60 hover:text-secondary smooth-transition text-sm">
              Impressum
            </a>
            <a href="#" className="font-geometric text-white/60 hover:text-secondary smooth-transition text-sm">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;