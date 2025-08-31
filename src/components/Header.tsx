import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-8">
              <a 
                href="/#services" 
                className="font-geometric font-medium text-lg smooth-transition hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leistungen
              </a>
              <a 
                href="/#about" 
                className="font-geometric font-medium text-lg smooth-transition hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über uns
              </a>
              <a 
                href="/unsere-geschichte" 
                className="font-geometric font-medium text-lg smooth-transition hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Unsere Geschichte
              </a>
              <Button className="interactive-button mt-4 w-full flex items-center gap-2 justify-center">
                Work with us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;