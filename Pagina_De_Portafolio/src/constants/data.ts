// interface de proyecto 

export interface Project {
    title: string;
    description:string;
    technologies: string[];
    link: string;
    github: string;
    image: string;
}

//interface para Experiencias 

export interface Experiencia {
    year: string;
    role: string;
    company: string;
    description: string;
}

// interface para datos personales 

export interface PersonalInfo {
    name: string;
    profesional: string;
    bio: string;
    about: string,
    email: string;
    linkein: string;
    github: string;
}

//Datos personales 

export const personalInfo: PersonalInfo = {
    name: "Willy Rivera",
    profesional: "Full Stack Developer",
    bio: `Soy un desarrollador Full Stack apasionado por el aprendizaje continuo y la creación de soluciones efectivas que abarcan tanto el front-end como el back-end. Con un año de experiencia en este campo, he desarrollado y optimizado proyectos utilizando tecnologías como React y Redux, aprovechando al máximo los hooks para crear interfaces interactivas y dinámicas. En el lado del servidor, domino Node.js y Express para construir APIs robustas y eficientes. Cada proyecto en el que trabajo es una oportunidad para perfeccionar mis habilidades y explorar nuevas posibilidades en el desarrollo Full Stack.`,
    about: `Soy una persona creativa y apasionada por el aprendizaje continuo, siempre en busca de dominar nuevas tecnologías y lenguajes modernos. Me caracterizo por una actitud positiva y proactiva en cada proyecto, con la capacidad de comunicarme de manera efectiva y adaptarme a diferentes contextos. Gracias a mi facilidad para el diálogo, puedo colaborar y resolver problemas en equipo de manera fluida y eficiente. Además, tengo experiencia trabajando bajo presión, manteniendo la calma y enfocándome en las soluciones. Disfruto de los retos y de la innovación, siempre buscando aportar ideas que sumen valor y frescura a cada iniciativa.`,
    email: "rwilly203@gmail.com",
    linkein: "www.linkedin.com/in/willyrih",
    github: "oldwilly12"
}

// Ejemplo de proyectos
export const projects: Project[] = [
    {
        title: "E-commerce App",
        description: "Aplicación de compras con carrito, pasarela de pago y sistema de usuarios.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        link: "https://example.com/e-commerce",
        github: "https://github.com/usuario/e-commerce",
        image: "/images/ecommerce.png",
    },
    {
        title: "Portfolio Website",
        description: "Mi portafolio personal mostrando mis proyectos y habilidades.",
        technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
        link: "https://example.com/portfolio",
        github: "https://github.com/usuario/portfolio",
        image: "/images/portfolio.png",
    },
];

export const experiencia: Experiencia[] = [
    {
        year: "2024 - Actualmente",
        role: "Developer",
        company: "Quickapps",
        description: "Desarrollador manenado JS, React, manejando reportes y uso de APIs",

    },
]