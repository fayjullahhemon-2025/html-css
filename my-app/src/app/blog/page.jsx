import Posts from "../components/Posts";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    author: "Fayjullah Haque",
    category: "JavaScript",
    content: "JavaScript is a powerful language used to make websites interactive.",
    likes: 120
  },
  {
    id: 2,
    title: "Understanding React Components",
    author: "John Doe",
    category: "React",
    content: "Components are the building blocks of a React application.",
    likes: 95
  },
  {
    id: 3,
    title: "CSS Flexbox Explained",
    author: "Sarah Khan",
    category: "CSS",
    content: "Flexbox makes it easier to create flexible and responsive layouts.",
    likes: 150
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    author: "Alex Smith",
    category: "TypeScript",
    content: "TypeScript adds static typing to JavaScript and helps catch errors early.",
    likes: 87
  },
  {
    id: 5,
    title: "How APIs Work",
    author: "David Rahman",
    category: "Web Development",
    content: "APIs allow different applications to communicate with each other.",
    likes: 110
  },
  {
    id: 6,
    title: "JavaScript Array Methods",
    author: "Fayjullah Haque",
    category: "JavaScript",
    content: "Methods like map, filter, reduce, and find make working with arrays easier.",
    likes: 200
  },
  {
    id: 7,
    title: "Building Your First Portfolio",
    author: "Nadia Islam",
    category: "Career",
    content: "A good portfolio can help developers showcase their skills and projects.",
    likes: 75
  },
  {
    id: 8,
    title: "Git and GitHub for Beginners",
    author: "Michael Lee",
    category: "Git",
    content: "Git helps developers track changes while GitHub makes collaboration easier.",
    likes: 180
  }
];
export default function BlogPage(){
    return (
        <div className='grid grid-cols-3 gap-4 mt-10 w-fit m-auto ' >
            {
                blogPosts.map(post=> <Posts key={post.id} post={post} ></Posts> )
            }
        </div>
    )
}