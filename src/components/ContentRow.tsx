import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type Content } from '@/lib/data';
import MediaCard from './MediaCard';
import { cn } from '@/lib/utils';

type ContentRowProps = {
  title: string;
  content: Content[];
};

export default function ContentRow({ title, content }: ContentRowProps) {
  if (!content || content.length === 0) {
    return null;
  }
  
  return (
    <div className={cn("py-4 md:py-6", { "pt-12": title === "Trending Now" })}>
      <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-0">{title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: content.length > 8, // Only loop if there are many items
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {content.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7 pl-2 md:pl-4">
              <MediaCard content={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden md:flex" />
        <CarouselNext className="mr-14 hidden md:flex" />
      </Carousel>
    </div>
  );
}
