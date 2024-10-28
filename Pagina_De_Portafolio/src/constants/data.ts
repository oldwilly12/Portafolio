// interface de proyecto 

export interface Project {
    title: string;
    description:string;
    technologies: string[];
    link: string;
    github: string;
    image: string;
}

// interface para datos personales 

export interface PersonalInfo {
    name: string;
    profesional: string;
    bio: string;
    email: string;
    linkein: string;
    github: string;
}

//Datos personales 

export const personalInfo: PersonalInfo = {
    name: "Willy Rivera",
    profesional: " Full Stack Developer",
    bio: `Desarollador apasionado con la experiencia con la tecnologia, con conocimiento sobre nuevas herramientas
    de desarrollo web asi como un gusto por seguir aprendiendo.
    Experiencia en el desarrollo web en la realizacion `,
}
