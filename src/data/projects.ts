export interface IProject{
    key: string;
    linkGit?: string;
    link?: string;
} 

export const projects: IProject[] = [
  {
    key: "cvWeb",
    linkGit:"https://gitlab.com/fguerendiain33/cvfguerendiain",
    link: "https://franco.guerendiain.com.ar",
  },
  {
    key: "frankografia",
    linkGit:"https://gitlab.com/fguerendiain33/frankografia",
    link: "https://franco.guerendiain.com.ar/frankografia/",
  },
  {
    key: "glossaryFront",
    linkGit:"https://gitlab.com/fguerendiain33/nihongoglossary",
  },
  {
    key: "glossaryApi",
    linkGit:"https://gitlab.com/fguerendiain33/nihongoglossaryback",
  }
];
