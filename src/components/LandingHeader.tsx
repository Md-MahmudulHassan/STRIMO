'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Skeleton } from '@/components/ui/skeleton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '../../public/assets/logo.png';
import text from '../../public/assets/text_logo.png';

const landingNavLinks = [
  { href: '/tv-shows', label: 'TV Shows' },
  { href: '/movies', label: 'Movies' },
  { href: '/new-popular', label: 'New & Popular' },
];

export const LandingHeader = () => {
    const { user, loading } = useAuth();
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center text-primary">
                <img src={Logo.src} alt="Logo" className="h-10 w-auto pr-10" />
                <img src={text.src} alt="Text Logo" className="h-8 w-auto ml-2" />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {landingNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2">
                  {loading ? (
                    <Skeleton className="h-9 w-20" />
                  ) : user ? (
                    <Button asChild>
                        <Link href="/browse">Go to App</Link>
                    </Button>
                  ) : (
                    <>
                      <Button variant="ghost" asChild>
                          <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild>
                          <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>

                <div className="md:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                            <div className="flex flex-col h-full">
                                <nav className="flex flex-col gap-4 mt-8">
                                    {landingNavLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsSheetOpen(false)}
                                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                    ))}
                                </nav>
                                <div className="mt-auto flex flex-col gap-2">
                                {loading ? (
                                    <Skeleton className="h-9 w-full" />
                                ) : user ? (
                                    <Button asChild>
                                        <Link href="/browse" onClick={() => setIsSheetOpen(false)}>Go to App</Link>
                                    </Button>
                                ) : (
                                    <>
                                    <Button variant="ghost" asChild>
                                        <Link href="/login" onClick={() => setIsSheetOpen(false)}>Login</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/signup" onClick={() => setIsSheetOpen(false)}>Sign Up</Link>
                                    </Button>
                                    </>
                                )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
          </div>
        </header>
    )
};
