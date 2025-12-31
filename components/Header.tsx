import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full border-b border-transparent ">

      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-primary">
         <Image src="logo.png" alt="Logo" width={100} height={100} />
           </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 rounded-full shadow-lg px-8 py-3">
          {["Home", "About", "Services", "Blog", "Success Stories"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-primary hover:text-primary/70 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button className="px-6">
          Book a Free Discovery Call
        </Button>
      </div>
    </header>
  )
}
