import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import { PageHero } from '@/components/layout/page-hero';
import { FadeUp } from '@/components/motion/fade-up';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/contact/contact-form';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Interpetro Energy Resources Limited — office location, phone, email, and business hours.',
};

const mapQuery = encodeURIComponent(siteConfig.address);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start the Conversation"
        description="Whether you're a partner, investor, or off-taker, our team is ready to hear from you."
      />

      <section className="section bg-white">
        <div className="container-narrow grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">Send Us a Message</h2>
            <ContactForm />
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-6">
            <Card className="p-7">
              <div className="flex gap-4">
                <span className="h-10 w-10 rounded-md bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">Office</h3>
                  <p className="text-sm text-ink-muted mt-1">{siteConfig.address}</p>
                </div>
              </div>
            </Card>
            <Card className="p-7">
              <div className="flex gap-4">
                <span className="h-10 w-10 rounded-md bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">Phone</h3>
                  <p className="text-sm text-ink-muted mt-1">{siteConfig.phone}</p>
                </div>
              </div>
            </Card>
            <Card className="p-7">
              <div className="flex gap-4">
                <span className="h-10 w-10 rounded-md bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">Email</h3>
                  <p className="text-sm text-ink-muted mt-1">{siteConfig.email}</p>
                </div>
              </div>
            </Card>
            <Card className="p-7">
              <div className="flex gap-4">
                <span className="h-10 w-10 rounded-md bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-brand-blue" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">Business Hours</h3>
                  <p className="text-sm text-ink-muted mt-1">Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM WAT</p>
                </div>
              </div>
            </Card>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 sm:pb-28 bg-white">
        <div className="container-narrow">
          <div className="rounded-lg overflow-hidden shadow-card border border-border aspect-[16/7]">
            <iframe
              title="Interpetro office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
