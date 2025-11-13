import { Code2, Rocket, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  
  const features = [
    {
      icon: Code2,
      title: t.cleanCode,
      description: t.cleanCodeDesc,
    },
    {
      icon: Rocket,
      title: t.innovation,
      description: t.innovationDesc,
    },
    {
      icon: Zap,
      title: t.performance,
      description: t.performanceDesc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                {t.description}
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-2xl font-semibold text-primary mb-2">6+</p>
                  <p className="text-muted-foreground">{t.yearsExperience}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
