
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
export default async function DesPageDetails({ params }) {
    const { desId } = await params
    const designer = designers.find(des => des.id === parseInt(desId));
    return (
        <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Image */}
            <img
                src={designer.image}
                alt={designer.name}
                className="w-full h-56 object-cover"
            />

            {/* Details */}
            <div className="p-5">

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                    {designer.name}
                </h2>

                {/* Role */}
                <p className="text-purple-600 font-medium mt-1">
                    {designer.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-6 mt-3">
                    {designer.description}
                </p>

                {/* Experience */}
                <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700">
                        Experience
                    </p>

                    <p className="text-gray-600 text-sm">
                        {designer.experience} years
                    </p>
                </div>

                {/* Skills */}
                <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                        Skills
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {designer.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}