import { useFullPage } from '@contexts/fullPage.context';
import React, { ReactNode, useEffect, useRef } from 'react';

interface FullPageScrollProps {
  children: ReactNode;
  className?: string;
}

export const FullPageScroll = ({
  children,
  className,
}: FullPageScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { setCurrentSlide, registerScrollToSlide } = useFullPage();

  const childCount = React.Children.count(children);

  // Register the scroll function with the context
  useEffect(() => {
    registerScrollToSlide((index: number) => {
      slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [registerScrollToSlide]);

  // Observe which slide is currently visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) setCurrentSlide(index);
          }
        });
      },
      { root: container, threshold: 0.5 },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [childCount, setCurrentSlide]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        height: '100%',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          ref={(el) => (slideRefs.current[index] = el)}
          style={{
            height: '100%',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
