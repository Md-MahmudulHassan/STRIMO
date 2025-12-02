'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/hooks/useAuth';
import { Bell, ChevronDown, Menu, Search, X } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';
import placeholderData from '@/lib/placeholder-images.json';

import logo from '../../public/assets/logo.png';
import textlogo from '../../public/assets/text_logo.png';

const navLinks = [
  { href: '/browse', label: 'Home' },
  { href: '/tv-shows', label: 'TV Shows' },
  { href: '/movies', label: 'Movies' },
  { href: '/new-popular', label: 'New & Popular' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const userProfile = placeholderData.profiles[0]; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.substring(0, 2).toUpperCase();
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background' : 'bg-gradient-to-b from-black/70 to-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-background/95">
                  <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between border-b pb-4">
                           <Link href="/browse" onClick={() => setIsSheetOpen(false)} className="flex items-center text-primary">
                              <Image src={logo} alt="Logo" width={100} height={30} className="h-7 w-auto" />
                              <Image src={textlogo} alt="Text Logo" width={100} height={30} className="h-7 w-auto" />

                          </Link>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <X className="h-6 w-6" />
                              <span className="sr-only">Close menu</span>
                            </Button>
                          </SheetTrigger>
                      </div>
                      <nav className="flex flex-col gap-4 mt-8">
                          {navLinks.map((link) => (
                          <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setIsSheetOpen(false)}
                              className={cn(
                                  'text-lg font-medium transition-colors',
                                  pathname === link.href
                                  ? 'text-primary font-semibold'
                                  : 'text-muted-foreground hover:text-foreground'
                              )}
                          >
                              {link.label}
                          </Link>
                          ))}
                      </nav>
                      <div className="mt-auto border-t pt-4">
                          {userProfile && (
                            <DropdownMenu>
                              <DropdownMenuTrigger className="w-full">
                                  <div className="flex items-center gap-2 text-left">
                                  <Avatar className="h-8 w-8">
                                      <AvatarImage src={userProfile?.avatarUrl || ''} alt={userProfile?.name || 'User'} data-ai-hint={userProfile?.hint || 'person face'} />
                                      <AvatarFallback>{getInitials(userProfile?.name)}</AvatarFallback>
                                  </Avatar>
                                  <span className="flex-grow">{userProfile.name}</span>
                                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                  </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start" className="w-56 mt-2">
                                <DropdownMenuLabel>Switch Profiles</DropdownMenuLabel>
                                <DropdownMenuItem onSelect={() => { router.push('/profiles'); setIsSheetOpen(false); }}>
                                    Manage Profiles
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onSelect={handleSignOut}>Sign Out</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                      </div>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/browse" className="flex items-center text-primary">
            <Image src={logo} alt="Logo" width={100} height={30} className="h-7 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:block">
            {loading ? (
              <Skeleton className="h-8 w-8 rounded-full" />
            ) : user && userProfile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 p-0 h-auto">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userProfile?.avatarUrl || ''} alt={userProfile?.name || 'User'} data-ai-hint={userProfile?.hint || 'person face'} />
                      <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>{userProfile.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={() => router.push('/profiles')}>Switch Profiles</DropdownMenuItem>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : !user && !loading ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
