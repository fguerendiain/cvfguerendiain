export interface ISkills {
  frontend: string[];
  testing: string[];
  backend: string[];
  mobile: string[];
  tools: string[];
  aiTools: string[];
  methodologies: string[];
  softSkills: string[]
}

export const skills: ISkills = {
  frontend: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Microfrontends (Single SPA)",
    "Redux",
    "Zustand",
    "Styled Components",
    "Tailwind CSS"
  ],
  testing: [
    "Jest",
    "React Testing Library",
    "Angular Unit Testing (Jasmine / Karma)",
    "SonarQube"
  ],
  backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "SQL (PostgreSQL / Oracle)"
  ],
  mobile: [
    "Android (Kotlin básico)"
  ],
  tools: [
    "Git",
    "CI/CD",
    "Docker",
    "Figma",
    "Linux"
  ],
  aiTools: [
    "GitHub Copilot",
    "ChatGPT / GPT-4"
  ],
  methodologies: [
    "Clean Code",
    "SOLID",
    "Scrum",
    "Agile"
  ],
  softSkills: [
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Colaboración con producto y negocio",
    "Autonomía y toma de decisiones"
  ]
};
