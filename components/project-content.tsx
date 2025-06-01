"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageTransition } from "@/components/page-transition";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Project } from "@/lib/projects";

interface ProjectContentProps {
  project: Project;
  projectId: number;
}

// Helper function to calculate time remaining
const calculateTimeRemaining = (projectId: number) => {
  // Project 1 releases on June 1, 2025 at noon EST
  const startDate = new Date('2025-06-01T12:00:00-04:00');
  
  // For projects after Project 1, add 7 days per project
  const targetDate = new Date(startDate);
  if (projectId > 1) {
    targetDate.setDate(startDate.getDate() + (projectId - 1) * 7);
  }
  
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  
  // Return 0 if the date has passed
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds, isPast: false };
};

export function ProjectContent({ project, projectId }: ProjectContentProps) {
  // For direction tracking between projects
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [prevId, setPrevId] = useState<number | null>(null);
  
  // For countdown timer
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(projectId));

  useEffect(() => {
    // Store previous ID for comparison
    if (prevId !== null) {
      // If moving to a higher ID number, animate from right
      // If moving to a lower ID number, animate from left
      setDirection(projectId > prevId ? "right" : "left");
    }
    
    // Update the previous ID
    setPrevId(projectId);
  }, [projectId, prevId]);
  
  // Countdown timer effect
  useEffect(() => {
    if (project.status === "upcoming") {
      // Initialize timer with current project ID
      setTimeRemaining(calculateTimeRemaining(projectId));
      
      const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(projectId));
      }, 1000);
      
      // Clean up timer
      return () => clearInterval(timer);
    }
  }, [project.status, projectId]);

  // Determine if we should show completed or upcoming template
  const showCompleted = project.status === "completed"

  return (
    <div className="slide-container">
      <div className="slide-content">
        <PageTransition direction={direction}>
          {!showCompleted ? (
            // Coming Soon Template
            <div className="coming-soon">
              <h1 className="coming-soon-title">Project {projectId}: {project.title}</h1>
              <div className="vintage-border w-full max-w-2xl my-8 py-12">
                <p className="coming-soon-description">Coming Soon</p>
                <Separator className="magazine-divider" />
                
                {/* Countdown Timer */}
                <div className="mt-8 text-center">
                  <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-4">
                    <div className="bg-muted rounded-md p-3 flex flex-col items-center">
                      <span className="text-3xl font-heading">{timeRemaining.days}</span>
                      <span className="text-xs text-muted-foreground">Days</span>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex flex-col items-center">
                      <span className="text-3xl font-heading">{timeRemaining.hours}</span>
                      <span className="text-xs text-muted-foreground">Hours</span>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex flex-col items-center">
                      <span className="text-3xl font-heading">{timeRemaining.minutes}</span>
                      <span className="text-xs text-muted-foreground">Minutes</span>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex flex-col items-center">
                      <span className="text-3xl font-heading">{timeRemaining.seconds}</span>
                      <span className="text-xs text-muted-foreground">Seconds</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">until project release</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Expected release: {new Date(new Date('2025-06-01T12:00:00-04:00').getTime() + (projectId - 1) * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Completed Project Template
            <div className="project-slide">
              <div className="project-header mb-4">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-description">{project.description}</p>
              </div>
              
              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-md border border-border">
                      <Image 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Project Content */}
              {project.content && (
                <div className="vintage-border mb-8">
                  <div className="column-text">
                    <p className="drop-cap mb-4">
                      {project.content}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Project Links */}
              <div className="flex flex-wrap mt-4">
                {project.liveLink && (
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="destructive" className="gap-2">
                      View Live <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </PageTransition>
      </div>
    </div>
  );
} 