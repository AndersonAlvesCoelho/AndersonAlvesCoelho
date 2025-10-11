import { Project } from '@/@types/project';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';

interface ProjectCarouselProps {
  projects: Project[];
  category?: string;
}

export const ProjectCarousel = ({
  projects,
  category,
}: ProjectCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay(autoplayOptions)]
  );

  const filteredProjects = category
    ? projects.filter((p) => p.category === category)
    : projects;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Nenhum projeto encontrado nesta categoria.
        </p>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Carousel Container */}
      <div
        className="overflow-hidden w-full select-none"
        ref={emblaRef}
        onPointerDown={(e) => e.preventDefault()} // bloqueia arraste
        onTouchStart={(e) => e.preventDefault()} // bloqueia em touch
      >
        <div className="flex w-full gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_auto] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc((100%/3)-1rem)] min-w-0 animate-fade-in"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {filteredProjects.length > 1 && (
        <>
          <Button
            variant="glass"
            size="icon"
            className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </>
      )}
      {/* Dots Indicators */}
      {filteredProjects.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
