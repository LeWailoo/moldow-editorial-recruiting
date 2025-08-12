import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="moldow-logo">
          moldow.
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-geometric font-medium smooth-transition hover:text-accent">
            Über uns
          </a>
          <a href="#services" className="font-geometric font-medium smooth-transition hover:text-accent">
            Leistungen
          </a>
          <a href="#contact" className="font-geometric font-medium smooth-transition hover:text-accent">
            Kontakt
          </a>
        </nav>
        
        <Button variant="outline" className="hidden md:inline-flex">
          Kontakt aufnehmen
        </Button>
      </div>
    </header>
  );
};

export default Header;