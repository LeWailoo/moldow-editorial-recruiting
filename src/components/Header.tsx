import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="moldow-logo smooth-transition hover:text-secondary">
          moldow.
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#services" className="font-geometric font-medium smooth-transition hover:text-secondary">
            Leistungen
          </a>
          <a href="/#about" className="font-geometric font-medium smooth-transition hover:text-secondary">
            Über uns
          </a>
          <a href="/unsere-geschichte" className="font-geometric font-medium smooth-transition hover:text-secondary">
            Unsere Geschichte
          </a>
        </nav>
        
        <Button className="interactive-button hidden md:flex items-center gap-2">
          Work with us
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;