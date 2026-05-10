"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  produkt: [
    { label: "Funktioner", href: "/funktioner" },
    { label: "Priser", href: "/priser" },
    { label: "Integrationer", href: "/funktioner" },
    { label: "FAQ", href: "/priser" },
  ],
  virksomhed: [
    { label: "Om os", href: "/om-os" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Blog", href: "/om-os" },
    { label: "Karriere", href: "/om-os" },
  ],
  support: [
    { label: "Hjælpecenter", href: "/kontakt" },
    { label: "Dokumentation", href: "/funktioner" },
    { label: "Status", href: "/kontakt" },
    { label: "API", href: "/funktioner" },
  ],
  juridisk: [
    { label: "Privatlivspolitik", href: "/om-os" },
    { label: "Vilkår og betingelser", href: "/om-os" },
    { label: "Cookiepolitik", href: "/om-os" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 52 52" fill="none">
                  <path d="M30 12L18 28H25L22 40L34 24H27L30 12Z" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Quick<span className="text-primary">Bite</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-xs">
              Det ultimative online bestillingssystem til restauranter, takeaways og dagligvarebutikker i Danmark.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@quickbite.dk" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                info@quickbite.dk
              </a>
              <a href="tel:+4512345678" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +45 12 34 56 78
              </a>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4" />
                København, Danmark
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Virksomhed</h4>
            <ul className="space-y-3">
              {footerLinks.virksomhed.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Juridisk</h4>
            <ul className="space-y-3">
              {footerLinks.juridisk.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            {new Date().getFullYear()} QuickBite. Alle rettigheder forbeholdes.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
