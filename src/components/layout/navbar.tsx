'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-power3',
        scrolled ? 'glass-nav shadow-soft py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Interpetro home">
          <Image
            src="/logo.png"
            alt="Interpetro Logo"
            width={260}
            height={90}
            priority
            className="h-20 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        'group relative inline-flex h-10 items-center px-4 text-sm font-semibold transition-colors duration-300 ease-power3',
                        active
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      )}
                    >
                      {link.label}

                      <span
                        className={cn(
                          'pointer-events-none absolute left-4 right-4 -bottom-0.5 h-[2px] bg-brand-green origin-left scale-x-0 transition-transform duration-300 ease-power3 group-hover:scale-x-100',
                          active && 'scale-x-100'
                        )}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild variant="accent" size="sm">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent>
            <SheetTitle className="mb-8">
              <Image
                src="/logo.png"
                alt="Interpetro Logo"
                width={220}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </SheetTitle>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'py-3 text-lg font-semibold border-b border-white/10 transition-colors',
                      pathname === link.href
                        ? 'text-brand-green'
                        : 'text-white hover:text-brand-green'
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-8">
              <SheetClose asChild>
                <Button asChild variant="accent" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}