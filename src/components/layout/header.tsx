"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import type { NavItem } from '@/lib/types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research & Pub.', href: '#research-publication' },
  { label: 'AI Generator', href: '#ai-generator' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial scroll state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Don't render anything until after mount to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={(e) => handleLinkClick(e, '#hero')}>
          VivianPortfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild size="sm" className="text-xs lg:text-sm">
              <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                {item.label}
              </Link>
            </Button>
          ))}
          <Button variant="default" asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs lg:text-sm">
            <Link href="#resume" onClick={(e) => handleLinkClick(e, "#resume")}>Resume</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Button key={item.label} variant="ghost" className="justify-start text-lg" asChild>
                     <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                       {item.label}
                    </Link>
                  </Button>
                ))}
                <Button variant="default" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                   <Link href="#resume" onClick={(e) => handleLinkClick(e, "#resume")}>Resume</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
