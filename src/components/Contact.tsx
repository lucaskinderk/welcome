import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const contactLinks = [
    {
      icon: Mail,
      label: t.email,
      value: "lucaskinderk@gmail.com",
      href: "mailto:lucaskinderk@gmail.com",
    },
    {
      icon: Phone,
      label: t.whatsapp,
      value: "+54 9 2974099943",
      href: "https://wa.me/5492974099943",
    },
    {
      icon: Linkedin,
      label: t.linkedin,
      value: "linkedin.com/in/lucas-kinderknech",
      href: "https://www.linkedin.com/in/lucas-kinderknech/",
    },
    {
      icon: MapPin,
      label: t.location,
      value: "Argentina",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="text-center mb-12 animate-fade-in">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors duration-200"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{link.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-primary)] transition-all duration-300 text-lg px-8"
              onClick={() => window.open(`https://wa.me/5492974099943?text=${language === "es" ? "Hola%20Lucas,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte" : "Hello%20Lucas,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20contact%20you"}`)}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.sendWhatsApp}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
              onClick={() => window.open("mailto:lucaskinderk@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.sendEmail}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
