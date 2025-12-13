export interface ISkills {
  frontend: string[];
  testing: string[];
  backend: string[];
  mobile: string[];
  tools: string[];
  aiTools: string[];
  methodologies: string[];
}

export const skills: ISkills = {
  frontend: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Styled Components",
    "shadcn/ui",
    "Zustand",
    "Redux",
    "NGXS",
    "NGRX",
    "Microfrontends",
    "Bootstrap",
  ],
  testing: [
    "Jest",
    "React Testing Library",
    "Unit Testing Angular (Jasmine/Karma)",
    "Mocking",
    "SonarQube (code quality)",
  ],
  backend: [
    "Node.js",
    "Express",
    "Java",
    "Spring",
    "Hibernate",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Oracle SQL",
    "RESTful APIs",
    "SOAP",
    "Mule ESB",
  ],
  mobile: ["Android (Kotlin básico)"],
  tools: [
    "Git",
    "GitLab",
    "Docker",
    "CI/CD (Dumbo, Azure DevOps, Jenkins)",
    "Figma",
    "Linux",
    "Windows",
    "VS Code",
    "Visual Studio",
    "Eclipse",
    "SoapUI",
    "Apache Solr",
    "Maven",
    "Tomcat",
  ],
  aiTools: ["GitHub Copilot", "ChatGPT / GPT-4", "Otros LLMs en modo Agent"],
  methodologies: [
    "Clean Code",
    "SOLID",
    "Scrum",
    "Agile"
  ],
};
