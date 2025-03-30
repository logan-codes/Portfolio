import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store built with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["TypeScript", "React", "Firebase"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio site with dark mode support",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive maps",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      tags: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Search and discover recipes based on available ingredients",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
      tags: ["JavaScript", "API Integration", "Bootstrap"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics tracking for multiple social platforms",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tags: ["React", "Redux", "Social APIs"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button asChild variant="outline" className="mr-4">
            <Link to="/" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" /> Back Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">All Projects</h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex items-center">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" /> Live
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex items-center">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;