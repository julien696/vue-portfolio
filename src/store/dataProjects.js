import { defineStore } from "pinia";

export const dataProjects = defineStore('projects', ()=> {
    const projects = [
        {
            title: "CV en ligne",
            image: {
                src: "src/assets/img/image-cv.png",
                alt: "cv en ligne de Julien Chauvin"
            },
            date: "25 juin 2024",
            technology: ["HTML","CSS"],
            url: "https://github.com/julien696/CV"
        },

        {
            title: "Cahier des charges La Socketterie",
            image: {
                src: "src/assets/img/image-cdc",
                alt: "page de présentation du cahier des charges pour La Socketterie"
            },
            date: "15 juillet 2024",
            technology: "Microsoft Word",
            url: "https://github.com/julien696/CDC-La-Socketterie"
        },

        {
            title: "Dynamiser un espace commentaire",
            image: {
                src: "src/assets/img/image-espace-com.png",
                alt: "formulaire pour ajouter un commentaire" 
            },
            date: "12 août 2024",
            technology: "Javascript",
            url: "https://github.com/julien696/dynamiserUnEspaceDeCommentaires"
        },
    ];
    return { projects };
})

