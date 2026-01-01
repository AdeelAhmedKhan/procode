import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
   const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Success Stories", href: "/success-stories" },
  ];
  return (
    <header className="w-full border-b border-transparent">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-primary text-2xl font-extrabold tracking-wide">
          <Image src="logo.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 rounded-full px-8 py-3 shadow-lg md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary hover:text-primary/70 text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button className="px-6">Book a Free Discovery Call</Button>
      </div>
    </header>
  );
}
