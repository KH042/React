import Title from "./Title"
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";
const projects =[
    {
        id: 1,
        title :'Gestionnaire de taches',
        descriptions :'Une application qui permet de créer, modifier, supprimer et organiser des tâches. Elle inclut la gestion des priorités, des dates d’échéance et l’affichage des tâches . ',
        technologies :['React' , ' Node.js', 'Tailwind CSS'],
        demoLink :'#',
        repoLink :'#',
        image :img1,
    },
    {
        id: 2,
        title :'Platforme E-commerce',
        descriptions :'Un site e-commerce complet avec un catalogue de produits, un panier, une gestion de commande, un espace utilisateur, et une interface d’administration.',
        technologies :['Next.js' , ' TypeScript', 'Prisma'],
        demoLink :'#',
        repoLink :'#',
        image :img2,
    },
    {
        id: 3,
        title :'Portfolio interactif',
        descriptions :'Un site personnel qui présente les compétences, projets, expériences et contacts de utilisateur. Il est dynamique, responsive, et intègre des animations modernes pour une navigation agréable.',
        technologies :['HTML' , ' CSS', 'JavaScript'],
        demoLink :'#',
        repoLink :'#',
        image :img3,
    },
    {
        id: 4,
        title :'Application de chat en temps réel',
        descriptions :'Permet aux utilisateurs de communiquer instantanément via un système de chat. Messages en temps réel, présence en ligne,  une bonne expérience utilisateur.',
        technologies :['React' , ' Socket.io', 'Express.js'],
        demoLink :'#',
        repoLink :'#',
        image :img4,
    },
    {
        id: 5,
        title :'Systeme de reservetion de salles',
        descriptions :'Application de gestion de réservation de salles (réunions, événements, etc.). Les utilisateurs peuvent consulter les disponibilités, réserver une salle.',
        technologies :['Next.js' , ' MongoDB', 'Chakra UI'],
        demoLink :'#',
        repoLink :'#',
        image :img5,
    },
    {
        id: 6,
        title :'Analyseur de sentiment',
        descriptions :'Une application qui analyse un texte (commentaire, avis, etc.) et détermine s’il est positif, négatif ou neutre. Elle utilise le traitement du langage naturel (NLP) pour offrir une analyse précise des émotions exprimées par une personne.',
        technologies :['Python' , ' Flask', 'NLTK'],
        demoLink :'#',
        repoLink :'#',
        image :img6,
    },
    
]

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projects"/>
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div  key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                        <img src={project.image} alt={project.title} className="w-full rounded-xl h-56  object-cover"/>
                        <div>
                            <h1 className="my-2 font-bold">{project.title}</h1>
                            <p className="text-sm">{project.descriptions}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map ((tech) => (
                                <span className="badge badge-secondary badge-sm">
                                    {tech}
                                </span>
                            ))

                            }
                        </div>
                        <div className="flex">
                            <a href={project.demoLink}>Demo
                            <Video className="w-4"/>
                            </a>
                            <a className=" btn btn-neutral w-1/3 ml-2"href={project.repoLink}>
                            <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}




export default Projects