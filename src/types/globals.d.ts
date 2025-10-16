interface Experience {
    title: string;
    place: string;
    date: string;
    projects: {
        [key: string]: {
        description: string;
        exemple?: string;
        competences: string[];
        };
    };
}