"use client";

import { Button } from "@/components/ui/button";
import { SlideNavigation } from "@/components/ui/slide-navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { projects } from "@/lib/projects";

export default function Home() {
  // Include home page as first slide
  const totalSlides = projects.length + 1; 
  const currentSlide = 0;

  return (
    <>
      <div className="slide-container">
        <div className="slide-content">
          <PageTransition direction="up">
            {/* Magazine Header */}
            <header className="mb-16 text-center">
              <h1 className="magazine-title mb-4">10 WEEKS</h1>
              <Separator className="magazine-divider" />
              <p className="mt-8 text-xl md:text-2xl italic">How Much Can I Improve My Life?</p>
            </header>

            {/* Introduction Section */}
            <section className="mb-16">
              <div className="vintage-border mb-10">
                <h2 className="article-heading mb-6">The Challenge</h2>
                <div className="column-text">
                  <p className="drop-cap mb-4">
                    Welcome to <span className="accent-text">10 Weeks</span>, a journey through ten unique projects. 
                    The first week of summer slipped by in a haze—no deadlines, no momentum, and no real drive to create. That changes now.
                  </p>
                  <p className="mb-4">
                  This showcase is a commitment to action: each week, I’ll take on a new project with real stakes—creative, financial, physical, etc.—and document the process here and on social media. 
                  Follow along as I learn, build, and grow.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Link href="/project/1">
                  <Button className="group">
                    Start Exploring
                    <ArrowRight className="ml-2 h-4 w-4 arrow-indicator" />
                  </Button>
                </Link>
              </div>
            </section>
          </PageTransition>
        </div>
      </div>

      {/* Navigation */}
      <SlideNavigation 
        totalSlides={totalSlides} 
        currentSlide={currentSlide} 
      />
    </>
  );
}
