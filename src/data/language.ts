export interface ILanguage {
  id: string;
  nameKey: string;
  levelKey: string;
  extraKey?: string;
}

export const language: ILanguage[] = [
  { id: "spanish", nameKey: "spanish.name", levelKey: "spanish.level"},
  { id: "english", nameKey: "english.name", levelKey: "english.level"},
  { id: "japanesse", nameKey: "japanesse.name", levelKey: "japanesse.level", extraKey:"japanesse.extra" }
]