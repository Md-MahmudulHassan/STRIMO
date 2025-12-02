import Link from 'next/link';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function ProfilesPage() {
  const { profiles } = placeholderData;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-12">Who's watching?</h1>
        <div className="flex flex-wrap justify-center items-start gap-8 mb-12">
          {profiles.map((profile) => (
            <Link key={profile.id} href="/browse" className="group w-40">
              <div className="w-40 h-40 rounded-md overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:scale-105">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  data-ai-hint={profile.hint}
                />
              </div>
              <p className="mt-2 text-muted-foreground text-lg group-hover:text-foreground transition-colors truncate">
                {profile.name}
              </p>
            </Link>
          ))}
          <div className="flex flex-col items-center w-40">
            <Link href="#" className="group">
                <div className="w-40 h-40 rounded-md flex items-center justify-center bg-muted/30 transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:scale-105 group-hover:bg-muted/50">
                    <PlusCircle className="h-16 w-16 text-muted-foreground group-hover:text-foreground" />
                </div>
                 <p className="mt-2 text-muted-foreground text-lg group-hover:text-foreground transition-colors">
                Add Profile
              </p>
            </Link>
          </div>
        </div>
        <Button variant="outline" size="lg" className="text-muted-foreground border-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground">
          Manage Profiles
        </Button>
      </div>
    </div>
  );
}
