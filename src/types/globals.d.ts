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

type ProjectSet = {
    title: string;
    projects: Project[];
}
interface Experience {
    title: string;
    place: string;
    date: string;
    projectSets?: ProjectSet[]
    projects?: Project[];
}

type ActiveExp = {
    exp: String;
    project: String;
} | null