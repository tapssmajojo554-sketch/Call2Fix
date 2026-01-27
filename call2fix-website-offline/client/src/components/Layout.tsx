import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Droplets, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/emergency", label: "Emergency" },
    { href: "/areas", label: "Service Areas" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 24/7 Emergency Service
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Serving Greater Cape Town
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0215550123" className="hover:text-accent transition-colors font-medium">
              021 555 0123
            </a>
            <span className="opacity-50">|</span>
            <a href="mailto:tapssmajojo554@gmail.com" className="hover:text-accent transition-colors">
              tapssmajojo554@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-2" : "bg-background py-4"
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img src="/images/call2fix-logo.png" alt="Call2Fix Logo" className="h-16 w-auto rounded-2xl shadow-md group-hover:shadow-lg transition-shadow" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1",
                    location === link.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all h-11 px-6" onClick={() => window.open('https://wa.me/+27740642297', '_blank')}>
              <Phone className="w-5 h-5" />
              <span className="font-semibold">WhatsApp</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10 fade-in duration-200">
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "block py-2 border-b border-border/50 transition-colors",
                    location === link.href ? "text-primary font-semibold" : "text-foreground"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button className="w-full gap-2 mt-4 h-12" size="lg" onClick={() => window.open('https://wa.me/+27740642297', '_blank')}>
              <Phone className="w-5 h-5" />
              <span className="font-semibold">WhatsApp: +27 74 064 2297</span>
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/images/call2fix-logo.png" alt="Call2Fix Logo" className="h-12 w-auto rounded-xl" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Cape Town's most trusted plumbing and electrical service. Professional, reliable, and available 24/7 for all your residential and commercial needs.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.001zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Emergency Plumbing</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Leak Detection</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Drain Cleaning</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Geyser Installation</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Bathroom Renovations</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Commercial Plumbing</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6">Service Areas</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/areas"><span className="hover:text-primary cursor-pointer transition-colors">City Bowl & CBD</span></Link></li>
                <li><Link href="/areas"><span className="hover:text-primary cursor-pointer transition-colors">Atlantic Seaboard</span></Link></li>
                <li><Link href="/areas"><span className="hover:text-primary cursor-pointer transition-colors">Southern Suburbs</span></Link></li>
                <li><Link href="/areas"><span className="hover:text-primary cursor-pointer transition-colors">Northern Suburbs</span></Link></li>
                <li><Link href="/areas"><span className="hover:text-primary cursor-pointer transition-colors">West Coast</span></Link></li>
                <li><Link href="/areas"><span className="hover:text-primary cursor-pointer transition-colors">Helderberg</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+27740642297" className="hover:text-white transition-colors">+27 74 064 2297</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+27676095679" className="hover:text-white transition-colors">+27 67 609 5679</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary shrink-0">✉️</span>
                  <a href="mailto:tapssmajojo554@gmail.com" className="hover:text-white transition-colors">tapssmajojo554@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>24/7 Emergency Service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Call2Fix Plumbing & Electrical. All rights reserved. | <a href="mailto:tapssmajojo554@gmail.com" className="hover:text-white transition-colors">tapssmajojo554@gmail.com</a></p>
            <div className="flex gap-6">
              <Link href="/privacy"><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></Link>
              <Link href="/terms"><span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
