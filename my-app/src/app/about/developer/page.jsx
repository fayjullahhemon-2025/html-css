import Developer from "../../components/Developer";
import styles from './developer.module.css'
const developers = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    experience: 2,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    experience: 3,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    experience: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "UI/UX Developer",
    skills: ["Figma", "HTML", "CSS", "Tailwind CSS"],
    experience: 2,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "David Wilson",
    role: "React Developer",
    skills: ["JavaScript", "React", "Redux", "TypeScript"],
    experience: 3,
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Sophia Taylor",
    role: "Backend Developer",
    skills: ["Python", "Django", "PostgreSQL"],
    experience: 5,
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 7,
    name: "Daniel Anderson",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
    experience: 1,
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 8,
    name: "Olivia Martinez",
    role: "Full Stack Developer",
    skills: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    experience: 4,
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  }
];
export default function DeveloperPage(){
    return(
        <div className={`flex justify-center items-center flex-col ${styles.bg}`} >
            <h1 className="text-4xl" >Meet our development team</h1>
            <div className="grid grid-cols-3 gap-2 m-1.5" >
                {
                    developers.map(developer=> <Developer key={developer.id} developer={developer} ></Developer> )
                }
            </div>
        </div>
    )
}