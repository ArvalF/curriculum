type LinkItem = {
    link: string;
    label: string;
  };

type Project = {
    title: string;
    description: string;
    exemples?: LinkItem[];
    competences: string[];
    }
interface Experience {
    title: string;
    place: string;
    date: string;
    projects: Project[];
}

type ActiveExp = {
    exp: String;
    project: String;
}