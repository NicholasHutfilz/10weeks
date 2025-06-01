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
              <p className="mt-8 text-xl md:text-2xl italic">A Journey Through Ten Creative Projects</p>
            </header>

            {/* Introduction Section */}
            <section className="mb-16">
              <div className="vintage-border mb-10">
                <h2 className="article-heading mb-6">The Challenge</h2>
                <div className="column-text">
                  <p className="drop-cap mb-4">
                    Welcome to <span className="accent-text">10 Weeks</span>, an ambitious journey through ten unique projects. 
                    Each week, a new creation will be unveiled, showcasing different skills, technologies, and creative visions.
                    This magazine-style showcase documents the process, challenges, and results of each undertaking.
                  </p>
                  <p className="mb-4">
                    From interactive applications to artistic expressions, each project represents a focused effort to build 
                    something meaningful in a limited timeframe. Follow along as the collection grows week by week, forming 
                    a complete portfolio of diverse works.
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
