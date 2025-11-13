import { ExternalLink, Github, CheckCircle2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCodeProject, setSelectedCodeProject] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      title: t.project1.title,
      description: t.project1.description,
      technologies: ["Keycloak", "Spring Security", "JWT", "OAuth2", "OIDC", "Microservices"],
    },
    {
      title: t.project2.title,
      description: t.project2.description,
      technologies: ["Java", "Spring Boot", "NFC", "Payment Gateway", "Security", "APIs REST"],
    },
    {
      title: t.project3.title,
      description: t.project3.description,
      technologies: ["Java (8, 11, 17)", "Spring Boot", "PostgreSQL", "Oracle", "Microservices", "Docker"],
    },
    {
      title: t.project4.title,
      description: t.project4.description,
      technologies: ["Spring Cloud", "Eureka", "Docker", "Kubernetes", "Jenkins", "OpenShift"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-muted border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => setSelectedCodeProject(index)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.code}
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-primary)] transition-all duration-300"
                    onClick={() => {
                      setSelectedProject(index);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.demo}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Example Dialog */}
      {selectedCodeProject !== null && (() => {
        const projectKey = `project${selectedCodeProject + 1}` as 'project1' | 'project2' | 'project3' | 'project4';
        const projectData = t[projectKey];
        
        return (
          <Dialog open={selectedCodeProject !== null} onOpenChange={() => setSelectedCodeProject(null)}>
            <DialogContent className="sm:max-w-4xl bg-card border-primary/50 max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t.codeExample} - {projectData.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-muted-foreground pt-2">
                  {projectData.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                {/* Note about private repositories */}
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-muted-foreground italic">
                    ℹ️ {t.note}
                  </p>
                </div>

                {/* Code Example */}
                <div className="rounded-lg bg-muted border border-border overflow-hidden">
                  <div className="px-4 py-2 bg-muted/50 border-b border-border flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {projectData.title}
                    </span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-xs md:text-sm">
                    <code className="text-foreground font-mono leading-relaxed whitespace-pre">
                      {projectData.codeExample}
                    </code>
                  </pre>
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-2">
                  {projects[selectedCodeProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  onClick={() => setSelectedCodeProject(null)}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-primary)] transition-all duration-300"
                >
                  {t.closeDemo}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        );
      })()}

      {/* Project Demo Dialogs */}
      {selectedProject !== null && (() => {
        const projectKey = `project${selectedProject + 1}` as 'project1' | 'project2' | 'project3' | 'project4';
        const projectData = t[projectKey];
        
        return (
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-2xl bg-card border-primary/50 max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {projectData.demoTitle}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground pt-2">
                  {projectData.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 pt-4">
                {/* Features List */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {language === 'es' ? 'Características Principales' : 'Key Features'}
                  </h4>
                  <ul className="space-y-3">
                    {projectData.demoFeatures.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    {language === 'es' ? '🔧 Stack Tecnológico' : '🔧 Tech Stack'}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {projectData.demoTech}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-primary)] transition-all duration-300"
                >
                  {t.closeDemo}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        );
      })()}
    </section>
  );
};

export default Projects;
