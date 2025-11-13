import { Database, Server, Code, GitBranch, Boxes, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  
  const skillCategories = [
    {
      title: t.backend,
      icon: Server,
      skills: ["Java (8, 11, 17)", "Spring Boot", "Node.js", "Python", "APIs", "Microservices"],
    },
    {
      title: t.frontend,
      icon: Code,
      skills: ["Angular", "React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    },
    {
      title: t.database,
      icon: Database,
      skills: ["Oracle (PL/SQL)", "PostgreSQL", "MongoDB", "FlyWay", "Liquibase"],
    },
    {
      title: t.cloud,
      icon: Cloud,
      skills: ["AWS", "Azure", "GCP", "Docker", "K8S", "OpenShift", "Jenkins"],
    },
    {
      title: t.security,
      icon: Boxes,
      skills: ["Keycloak", "Micrometer", "DataDog", "SonarQube", "JUnit", "Mockito"],
    },
    {
      title: t.tools,
      icon: GitBranch,
      skills: ["Git (GitLab)", "Swagger", "JIRA", "Trello", "Scrum", "Prompt Engineering"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      {skill}
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

export default Skills;
