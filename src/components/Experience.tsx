import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;
  
  const experiences = [
    {
      title: t.exp1.title,
      company: t.exp1.company,
      period: t.exp1.period,
      description: t.exp1.description,
      technologies: ["Java", "Spring Boot", "Angular", "Microservices", "SQL", "NoSQL", "REST APIs", "Git"],
    },
    {
      title: t.exp2.title,
      company: t.exp2.company,
      period: t.exp2.period,
      description: t.exp2.description,
      technologies: ["Java", "Spring Boot", "Angular", "Python", "AI/ML", "Microservices", "SQL", "NoSQL", "AWS", "Azure", "GCP"],
    },
    {
      title: t.exp3.title,
      company: t.exp3.company,
      period: t.exp3.period,
      description: t.exp3.description,
      technologies: ["Java (8, 11, 17)", "Spring Boot", "Oracle", "PostgreSQL", "Docker", "OpenShift", "Keycloak"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-1 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.title}
                    </h3>
                    <p className="text-lg text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
