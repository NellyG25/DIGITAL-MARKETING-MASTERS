import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Logo & Branding */}
        <h3 className="text-xl font-semibold">Digital Marketing Masters</h3>
        <p className="mt-2 text-sm">
          Helping businesses grow with SEO, Google My Business, and digital marketing.
        </p>

        {/* Navigation Links */}
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
          <a href="/" className="hover:text-white transition">About</a>
          <a href="/" className="hover:text-white transition">Packages</a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Digital Marketing Masters. All rights reserved.</p>
      </div>
    </footer>
  );
}
