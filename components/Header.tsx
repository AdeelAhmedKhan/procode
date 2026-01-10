'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react'; // Install lucide-react if not already
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface HeaderProps {
  variant?: 'white' | 'transparent'; 
  bgColor?: string;
}
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Success Stories', href: '/success-stories' },
];
export default function Header({ variant='white', bgColor }: HeaderProps) {
  return (
    <header className={`w-full border-b border-transparent ${bgColor}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-primary text-2xl font-extrabold tracking-wide">
          <Image
            src={variant === 'white' ? 'logo.png' : 'logo-white.png'}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden items-center gap-6 rounded-full px-8 py-3 md:flex ${
            variant === 'white' ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                variant === 'white'
                  ? 'text-primary hover:text-primary/70'
                  : 'text-white hover:text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:block">
          <Button variant={variant === 'white' ? 'default' : 'secondary'} className="px-6">
            Book a Free Discovery Call
          </Button>
        </Link>

        {/* --- Mobile Menu (Visible on small screens) --- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={variant === 'white' ? 'text-primary' : 'text-white'}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <SheetHeader>
                <SheetTitle className="text-left">
                 <Link href="/" className="text-primary text-2xl font-extrabold tracking-wide">
          <Image
            src={'logo.png'}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-10 flex flex-col gap-6 px-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="my-2" />
                <Link href="/contact" className="w-full">
                  <Button className="w-full py-6 text-base">Book a Free Discovery Call</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
