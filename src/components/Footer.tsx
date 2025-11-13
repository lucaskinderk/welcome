import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { useEffect, useState } from "react";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const currentVisits = parseInt(localStorage.getItem('portfolio-visits') || '0');
    const newVisits = currentVisits + 1;
    localStorage.setItem('portfolio-visits', newVisits.toString());
    setVisits(newVisits);
  }, []);
  
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          {t.madeWith} <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> {t.by}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} {t.rights}
        </p>
        <p className="text-xs text-muted-foreground/30 mt-4">{visits}</p>
      </div>
    </footer>
  );
};

export default Footer;
