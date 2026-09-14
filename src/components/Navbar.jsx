"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./ui/Icons";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Craft", href: "#craft" },
  { label: "Atelier", href: "#atelier" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-silk ${
        scrolled
          ? "border-b border-white/5 bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 sm:h-20">
        {/* Brand */}
        <a
          href="#top"
          onClick={close}
          className="font-serif text-xl tracking-[0.3em] text-mist transition-colors hover:text-gold sm:text-2xl"
        >
          AURELLE
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[11px] font-medium uppercase tracking-luxe text-champagne/80 transition-colors hover:text-mist"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-silk group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#collection"
            className="border border-gold/60 px-5 py-2 text-[11px] font-medium uppercase tracking-luxe text-gold transition-all duration-300 ease-silk hover:bg-gold hover:text-ink"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="p-2 text-mist md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-ink transition-all duration-500 ease-silk md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-serif text-xl tracking-[0.3em] text-mist">AURELLE</span>
          <button
            type="button"
            onClick={close}
            className="p-2 text-mist"
            aria-label="Close menu"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-10 flex flex-col items-center gap-8 px-6">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={`font-serif text-3xl text-mist transition-all duration-500 ease-silk hover:text-gold ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#collection"
            onClick={close}
            className={`mt-4 border border-gold px-8 py-3 text-xs font-medium uppercase tracking-luxe text-gold transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            Shop Now
          </a>
        </nav>
      </div>
    </header>
  );
}
