import Title from "./Title";
import imgCSS from "../assets/techno/css.png"; 
import imgJS from "../assets/techno/JS.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const skills = [
    { id:1, name: "HTML", image: imgHTML },
    { id:2, name: "CSS", image: imgCSS },
    { id:3, name: "JavaScript", image: imgJS },
    { id:4, name: "React", image: imgREACT },
    { id:5, name: "Node.js", image: imgNODE },
    { id:6, name: " Tailwin CSS", image: imgTAILWIND },
    { id:7, name: "TypeScript", image: imgTYPE },
    { id:8, name: "Next.js", image: imgNEXT},
    { id:9, name: "Prisma", image: imgPRISMA },
    
];
const experiences = [
    {
        id:1,
        role:"Software Engineer",
        company: "Google",
        period: "Sep 2022 -Présent",
        description :[
            "Développement de nouvelles fonctionnalités pour Google Maps.",
            "Optimisation des performances de l'application.",
        ],
        image : google,
    },
    {
        id:2,
        role:"Fullstack Developper",
        company: "Meta",
        period: "Jan 2021 -Aout 2022",
        description :[
            "Créaction  d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image : meta,
    },
    {
        id:3,
        role:"Frontend Developper",
        company: "Amazon",
        period: "Mai 2019 -D2D 2020",
        description :[
            "Dévoppement d'une interface utilisateur pour Amazon Web Services.",
            "Implémentation des tests unitaires et E2E.",
        ],
        image : amazon,
    },
];
const Experiences = () => {
    return(
        <div id="Experiences">
            <Title  title="Experiences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skills) =>(
                        <div key={skills.id} className="flex justify-center items-center flex-col">
                        <div className="w-24 h-24 p-2 rounded-full border-2 border-secondary">
                            <img src={skills.image} alt={skills.name} className="object-cover rounded-full h-fuul w-full"/>
                        </div>
                        <span className="mt-2 text-sm">{skills.name}</span>
                        <div></div>
                        </div>
                    ))

                    }
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                
            {experiences.map ((experiences) =>(
                <div key={experiences.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                    
                  <div className="flex items-center">
                    <img src={experiences.image} alt={experiences.company}  className="object-cover h-10 w-10" />

                    <div className="ml-4">
                        <h1 className="text-xl text-secondary font-bold">{experiences.role}, {experiences.company}</h1>
                        <span className="text-sm">{experiences.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc ml-16 mt-2">
                    {experiences.description.map((desc , index ) =>(
                        <li key={index}>
                            {desc}
                        </li>
                    ))
                    }
                    </ul>  
                </div>
            ))}
        </div>
      </div>
      
    </div>



                
            
        
    );
};
export default Experiences;  
