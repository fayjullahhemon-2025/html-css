import Designer from "../../components/Designer";
import React from "react"
const designers = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    experience: 3,
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    description:
      "A creative UI/UX designer focused on creating clean, intuitive, and user-friendly digital experiences."
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Product Designer",
    skills: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    experience: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    description:
      "A product designer who combines user research and visual design to build meaningful digital products."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Visual Designer",
    skills: ["Photoshop", "Illustrator", "Figma", "Branding"],
    experience: 4,
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    description:
      "A visual designer passionate about typography, color, branding, and creating visually engaging experiences."
  },
  {
    id: 4,
    name: "Daniel Brown",
    role: "UX Designer",
    skills: ["User Research", "Figma", "Usability Testing", "Wireframing"],
    experience: 2,
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    description:
      "A UX designer who focuses on understanding users and turning their needs into simple and effective interfaces."
  },
  {
    id: 5,
    name: "Olivia Taylor",
    role: "Interaction Designer",
    skills: ["Figma", "Interaction Design", "Prototyping", "Motion Design"],
    experience: 3,
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    description:
      "An interaction designer who creates engaging interfaces with thoughtful animations and smooth user interactions."
  },
  {
    id: 6,
    name: "William Davis",
    role: "Graphic Designer",
    skills: ["Photoshop", "Illustrator", "InDesign", "Brand Identity"],
    experience: 6,
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    description:
      "An experienced graphic designer specializing in branding, marketing materials, and strong visual identities."
  },
  {
    id: 7,
    name: "Ava Johnson",
    role: "Web Designer",
    skills: ["Figma", "HTML", "CSS", "Responsive Design"],
    experience: 2,
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    description:
      "A web designer who creates responsive, modern, and accessible websites with a strong focus on user experience."
  },
  {
    id: 8,
    name: "Henry Miller",
    role: "UX/UI Designer",
    skills: ["Figma", "UX Research", "UI Design", "Design Systems"],
    experience: 4,
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    description:
      "A UX/UI designer who enjoys transforming complex ideas into simple, elegant, and scalable interfaces."
  }
];
export default function DesignerPage() {

    return (
        <div className="flex justify-center items-center text-4xl flex-col" >
            <h1>Meet our designer team</h1>
            <div className='grid grid-cols-3 gap-2 m-2' > 
                {
                designers.map(designer=> <Designer key={designer.id} designer={designer} ></Designer>)
                }
            </div>
        </div>
    )
}