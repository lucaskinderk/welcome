import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [shakeK1, setShakeK1] = useState(false);
  const [shakeK2, setShakeK2] = useState(false);
  const [shakeL, setShakeL] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const playToasty = () => {
    const audio = new Audio('/toasty.mp3');
    audio.volume = 0.7;
    audio.play().catch(err => console.log('Audio play failed:', err));
    
    setShakeK2(true);
    setTimeout(() => setShakeK2(false), 400);
  };

  const playFatality = () => {
    const audio = new Audio('/fatality.mp3');
    audio.volume = 0.7;
    audio.play().catch(err => console.log('Audio play failed:', err));
    
    setShakeK1(true);
    setTimeout(() => setShakeK1(false), 400);
  };

  const playBell = () => {
    const audio = new Audio('/bell.mp3');
    audio.volume = 0.7;
    audio.play().catch(err => console.log('Audio play failed:', err));
    
    setShakeL(true);
    setTimeout(() => setShakeL(false), 400);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-[var(--glow-primary)] animate-glow-pulse">
              <img 
                src={profilePhoto} 
                alt="Lucas Kinderknech - Full Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow-pulse">
            Lucas <span onClick={playFatality} className={`cursor-pointer hover:scale-110 inline-block transition-transform ${shakeK1 ? 'animate-shake' : ''}`}>K</span>inder<span onClick={playToasty} className={`cursor-pointer hover:scale-110 inline-block transition-transform ${shakeK2 ? 'animate-shake' : ''}`}>k</span>nech
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            {t.title}
          </p>
          <p className="text-xl md:text-2xl text-primary mb-8">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.location}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-primary)] transition-all duration-300 text-lg px-8"
            >
              {t.viewProjects}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
            >
              {t.contact}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
