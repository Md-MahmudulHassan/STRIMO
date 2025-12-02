import Image from 'next/image';
import Link from 'next/link';
import { Play, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { type Content } from '@/lib/data';
import { cn } from '@/lib/utils';

type HeroProps = {
  content: Content;
};

export default function Hero({ content }: HeroProps) {
  return (
    <div className="relative h-[56.25vw] min-h-[300px] md:min-h-[400px] max-h-[800px] w-full pt-16">
      <Image
        src={content.imageUrl}
        alt={content.imageAlt}
        fill
        className="object-cover"
        priority
        data-ai-hint={content.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent"></div>

      <div className="absolute bottom-[10%] sm:bottom-[15%] md:bottom-[25%] lg:bottom-[30%] left-0 px-4 md:px-16">
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
            {content.title}
          </h1>
          <p className="mt-2 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md line-clamp-2 sm:line-clamp-3">
            {content.description}
          </p>
          <div className="mt-4 md:mt-6 flex items-center gap-2 md:gap-4">
            <Button asChild className="h-9 px-3 md:h-11 md:px-8">
              <Link href={`/watch/${content.id}`}>
                <Play className="mr-2 h-5 w-5 fill-current" />
                Play
              </Link>
            </Button>
            <Button variant="secondary" className="h-9 px-3 md:h-11 md:px-8">
              <Plus className="mr-2 h-5 w-5" />
              My List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
