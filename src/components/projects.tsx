import { ExternalLink, GithubIcon } from "lucide-react";
import React from "react";
import data from "../assets/data/data.json";
import banner from "../../public/banner.webp";
  
  const ProjectCard = ({ project }: any) => {
    return (
      <div className="group relative rounded-xl overflow-hidden bg-indigo-950/50 hover:bg-violet-500/10 
        transition-all duration-500 transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={project.image || banner} 
            alt={project.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="px-6 py-4 text-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex gap-4 justify-center mb-4 cursor-wait">
                <span className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-full 
                    flex items-center gap-2 text-sm font-medium transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </span>
                <span className="bg-indigo-950/50 hover:bg-indigo-900 text-white px-4 py-2 rounded-full 
                    flex items-center gap-2 text-sm font-medium border border-violet-500/30 
                    transform hover:scale-105 transition-all duration-300"
                >
                  <GithubIcon size={16} />
                  Code
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-violet-400">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: any, i: number) => (
              <span 
                key={i}
                className="px-3 py-1 bg-violet-500/20 rounded-full text-violet-400 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Projects Section Component
  const ProjectsSection = React.forwardRef(({ isVisible }: any, ref: any) => {
    return (
      <section
        ref={ref}
        id="projects"
        className="min-h-screen py-20"
      >
        <div className={`container mx-auto px-4 sm:px-6 transition-all duration-700 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 text-center">
            My <span className="text-violet-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one taught me something new 
            and helped me grow as a developer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
  
          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/rushij27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500/20 hover:bg-violet-500/30 
                text-violet-400 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <GithubIcon size={20} />
              View More Projects
            </a>
          </div>
        </div>
      </section>
    );
  });
  
  export default ProjectsSection;