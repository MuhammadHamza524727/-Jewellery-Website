"use client";

import { useState } from "react";

const SHOP_LINKS = ["Necklaces", "Earrings", "Bracelets", "Rings", "Sets"];
const HOUSE_LINKS = [
  { label: "The Collection", href: "#collection" },
  { label: "Our Craft", href: "#craft" },
  { label: "The Atelier", href: "#atelier" },
  { label: "Quality", href: "#quality" },
  { label: "Style Notes", href: "#style" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/5 bg-coal/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="font-serif text-2xl tracking-[0.3em] text-mist">
              AURELLE
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-smoke">
              Refined artificial jewellery, designed and finished by hand in
              small batches — made to make every moment feel extraordinary.
            </p>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium uppercase tracking-luxe text-gold">Shop</h3>
            <ul className="mt-5 space-y-3">
              {SHOP_LINKS.map((label) => (
                <li key={label}>
                  <a href="#collection" className="text-sm text-smoke transition-colors hover:text-mist">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* House */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium uppercase tracking-luxe text-gold">The House</h3>
            <ul className="mt-5 space-y-3">
              {HOUSE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-smoke transition-colors hover:text-mist">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-medium uppercase tracking-luxe text-gold">
              Stay in Touch
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-smoke">
              New batches, early access and quiet releases. No noise.
            </p>
            {subscribed ? (
              <p className="mt-5 border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold" role="status">
                Welcome to AURELLE — you're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-mist placeholder:text-smoke/60 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-gold px-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-smoke">
            © {new Date().getFullYear()} AURELLE. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-smoke/70">
            Craft · Care · Polish · Style
          </p>
        </div>
      </div>
    </footer>
  );
}
