import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props={
  bgColor?: string
  variant?: "white" | "transparent"
}
export default function Header({bgColor="bg-transparent", variant="white"}: Props) {
   const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blogs" },
    { name: "Success Stories", href: "/success-stories" },
  ];
  return (
    <header className={`w-full border-b border-transparent ${bgColor}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-primary text-2xl font-extrabold tracking-wide">
          <Image src={variant === "white" ? "logo.png" : "logo-white.png"} alt="Logo" width={100} height={100} />
        </Link>

        {/* Navigation */}
        <nav className={`hidden items-center gap-6 rounded-full px-8 py-3 md:flex ${variant === 'white' ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`  text-sm font-medium transition-colors ${variant === 'white' ? 'text-primary hover:text-primary/70' : 'text-white hover:text-white/70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden md:block">
        <Button variant={variant==='white' ? 'default' : 'secondary'} className="px-6">Book a Free Discovery Call</Button>
        </Link>
      </div>
    </header>
  );
}
