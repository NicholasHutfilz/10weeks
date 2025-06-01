"use client";

import { SlideNavigation } from "@/components/ui/slide-navigation";
import { ProjectContent } from "@/components/project-content";
import { Project } from "@/lib/projects";

interface ClientPageProps {
  project: Project;
  projectId: number;
}

export default function ClientPage({ project, projectId }: ClientPageProps) {
  // Calculate currentSlide (project ID + home page)
  const currentSlide = projectId;
  const totalSlides = 11; // 10 projects + home page

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
      />
    </>
  );
} 