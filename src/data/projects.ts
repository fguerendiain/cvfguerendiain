export interface IProject{
    key: string;
    linkGit?: string;
    link?: string;
} 

export const projects: IProject[] = [
  {
    key: "cvWeb",
    linkGit:"https://github.com/fguerendiain/cvfguerendiain",
    link: "https://franco.guerendiain.com.ar",
  },
  {
    key: "frankografia",
    linkGit:"https://github.com/fguerendiain/frankografia",
    link: "https://franco.guerendiain.com.ar/frankografia/",
  },
  {
    key: "glossaryFront",
    linkGit:"https://github.com/fguerendiain/nihongoglossary",
  },
  {
    key: "glossaryApi",
    linkGit:"https://github.com/fguerendiain/nihongoglossaryback",
  }
];
