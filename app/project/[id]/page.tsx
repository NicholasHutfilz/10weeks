"use client";

import { SlideNavigation } from "@/components/ui/slide-navigation";
import { notFound } from "next/navigation";
import { ProjectContent } from "@/components/project-content";
import { projects } from "@/lib/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  
  // Calculate currentSlide (project ID + home page)
  const currentSlide = projectId;
  const totalSlides = projects.length + 1;

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectContent 
        project={project} 
        projectId={projectId} 
      />

      {/* Navigation */}
      <SlideNavigation 
        totalSlides={totalSlides} 
        currentSlide={currentSlide} 
        baseRoute="" 
      />
    </>
  );
} 