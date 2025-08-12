import teamImage from "@/assets/team-workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="editorial-heading text-primary">
              Unsere Mission
            </h2>
            <p className="editorial-subheading text-muted-foreground leading-relaxed">
              Bei moldow. verstehen wir, dass außergewöhnliche Unternehmen außergewöhnliche Menschen brauchen. 
              Wir kombinieren menschliche Intuition mit datengestützten Insights, um die perfekte Passung 
              zwischen Talent und Kultur zu schaffen.
            </p>
            <p className="font-geometric text-foreground/80 leading-relaxed">
              Unser Ansatz geht über traditionelle Recruiting-Methoden hinaus. Wir investieren Zeit, 
              um sowohl Ihre Unternehmenskultur als auch die Aspirationen der Kandidaten tiefgreifend zu verstehen.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={teamImage} 
              alt="moldow. Team bei der Arbeit"
              className="w-full h-96 object-cover rounded-lg shadow-lg hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;