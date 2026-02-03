

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    isDemo?: boolean;
}

export interface UserProfile {
    name: string;
    role: string;
    description: string;
    githubUrl: string;
    projects: Project[];
}