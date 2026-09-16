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
export default async function DevPageInfo({ params }) {
    const { devId } = await params;
    const devInfo = developers.find(dev => dev.id === parseInt(devId));
    return (
        <div className="w-80 rounded-xl bg-white p-5 shadow-lg hover:shadow-2xl transition duration-300">

            {/* Developer Image */}
            <img
                src={devInfo.image}
                alt={devInfo.name}
                className="w-28 h-28 rounded-full object-cover mx-auto"
            />

            {/* Name & Role */}
            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    {devInfo.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                    {devInfo.role}
                </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center mt-4 leading-6">
                {devInfo.name} is a passionate {devInfo.role} with{" "}
                {devInfo.experience} years of experience. Skilled in{" "}
                {devInfo.skills.join(", ")} and interested in building
                modern and user-friendly applications.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
                {devInfo.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>

        </div>
    )
}