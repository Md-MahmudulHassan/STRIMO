import Link from 'next/link';
import Image from 'next/image';
import { Play, Plus, ChevronDown } from 'lucide-react';

import { type Content } from '@/lib/data';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

type MediaCardProps = {
  content: Content;
};

export default function MediaCard({ content }: MediaCardProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="group relative rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 bg-card">
        <Link href={`/watch/${content.id}`}>
         <Image
            src={content.imageUrl}
            alt={content.imageAlt}
            width={300}
            height={169}
            className="object-cover w-full aspect-video"
            data-ai-hint={content.imageHint}
          />
        </Link>
        <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
           <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-white truncate text-sm">{content.title}</h3>
                <div className="flex items-center gap-1 mt-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon" className="h-7 w-7 bg-primary/80 hover:bg-primary" asChild>
                                <Link href={`/watch/${content.id}`}>
                                <Play className="h-4 w-4 fill-white" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Play</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="secondary" size="icon" className="h-7 w-7">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add to My List</p>
                        </TooltipContent>
                    </Tooltip>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="h-7 w-7 ml-auto">
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Add to Queue</DropdownMenuItem>
                            <DropdownMenuItem>Not for me</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
           </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
