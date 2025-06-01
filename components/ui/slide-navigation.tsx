"use client";

import { useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface SlideNavigationProps {
  totalSlides: number;
  currentSlide: number;
  baseRoute: string;
}

export function SlideNavigation({ totalSlides, currentSlide, baseRoute }: SlideNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wheelLockRef = useRef(false);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  const navigatePrev = useCallback(() => {
    if (!isFirstSlide) {
      if (currentSlide === 1) {
        router.push('/');
      } else {
        router.push(`/project/${currentSlide - 1}`);
      }
    }
  }, [currentSlide, isFirstSlide, router]);

  const navigateNext = useCallback(() => {
    if (!isLastSlide) {
      if (currentSlide === 0) {
        router.push('/project/1');
      } else {
        router.push(`/project/${currentSlide + 1}`);
      }
    }
  }, [currentSlide, isLastSlide, router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigateNext, navigatePrev]);

  // Wheel navigation with debounce
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If locked, don't process wheel events
      if (wheelLockRef.current) return;

      // Determine scroll direction and threshold
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontalScroll ? e.deltaX : e.deltaY;
      const threshold = 50; // Adjust sensitivity

      if (Math.abs(delta) > threshold) {
        // Lock wheel events temporarily
        wheelLockRef.current = true;

        // Navigate based on scroll direction
        if (delta > 0) {
          navigateNext();
        } else {
          navigatePrev();
        }

        // Clear any existing timeout
        if (wheelTimeoutRef.current) {
          clearTimeout(wheelTimeoutRef.current);
        }

        // Set a timeout to unlock wheel events
        wheelTimeoutRef.current = setTimeout(() => {
          wheelLockRef.current = false;
        }, 1000); // Adjust timeout as needed
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [navigateNext, navigatePrev]);

  return (
    <>
      {/* Previous button */}
      {!isFirstSlide && (
        <Button 
          variant="secondary" 
          onClick={navigatePrev}
          className="nav-button nav-button-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      {/* Next button */}
      {!isLastSlide && (
        <Button 
          variant="secondary" 
          onClick={navigateNext}
          className="nav-button nav-button-next"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}

      {/* Page indicator */}
      <div className="page-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Link
            key={index}
            href={index === 0 ? '/' : `/project/${index}`}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Issue label */}
      <div className="issue-label">
        VOLUME 1 • ISSUE {currentSlide === 0 ? '0' : currentSlide}
      </div>
    </>
  );
} 