// components/Footer.tsx
import { Facebook, Instagram, MapPin, Phone, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B2766] text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Help */}
        <div className="space-y-4">
         {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-primary">
         <Image src="logo-white.png" alt="Logo" width={150} height={150} />
        </Link>
          <p className="text-sm mt-15 font-light">Need help? Reach us at: <a href="mailto:info@procode.com" className="underline">info@procode.com</a></p>
          <div className="flex space-x-4 mt-7">
            <a href="#" className="hover:text-gray-300">< FaFacebookF className='size-7' /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram className='size-7' /></a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl">Contact</h3>
          <p className="flex items-start gap-4 text-sm font-light">
            <span><MapPin /></span>
            London Office <br />
            77 New Cavendish St, London, W1W 6XB, United Kingdom
          </p>
          <p className="flex items-start gap-4 text-sm font-light">
            <span><PhoneCall /></span> 00000 000000
          </p>
        </div>

        {/* Site Pages */}
        <div className="space-y-4">
          <h3 className="text-xl">Site Pages</h3>
          <ul className="text-sm space-y-1 font-light">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* From the blog */}
        <div className="space-y-4">
          <h3 className="text-xl">From the blog</h3>
          <ul className="space-y-2 text-sm font-light">
            <li className="flex items-center gap-2">
              <Image src="blogs/images/rpa.png" alt="Blog 1" width={40} height={40} className="rounded-sm" />
              <Link href="blog/what-is-rpa">What is Robotic Process Automation (RPA)?</Link>
            </li>
            <li className="flex items-center gap-2">
              <Image src="blogs/images/automation.png" alt="Blog 2" width={40} height={40} className="rounded-sm" />
              <Link href="blog/types-of-automation">Types of Automation</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-500 my-12  mx-auto" />

      <p className="text-center text-sm">Copyright ProCode {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
