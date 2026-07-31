import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

import { Logo } from '@/components/layout/logo';
import { Separator } from '@/components/ui/separator';
import { navLinks, siteConfig, services } from '@/lib/site-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-white/70">
      <div className="container-narrow pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12 lg:gap-8">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-brand-navy-deep hover:bg-brand-green hover:border-brand-green transition-all duration-300 ease-power3"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-brand-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="hover:text-brand-green transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-green" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brand-green" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-brand-green" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-green transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
