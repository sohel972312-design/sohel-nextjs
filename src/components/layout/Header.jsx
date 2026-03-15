"use client";
import Container from "@/components/ui/Container";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoSVG, PhoneIconSVG } from "@/lib/shared";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-1030 transition duration-300 ${scrolled ? "bg-black" : ""}`}>
      <Container>
        <nav aria-label="Main Navigation">
          <div className=" mx-auto ">
            <div className="flex items-center justify-between py-3 lg:py-5">

              {/* Mobile logo */}
              <Link className="block md:hidden p-0" href="/" title="Home" onClick={close}>
                <LogoSVG className="w-20" />
              </Link>

              {/* Mobile right — CTA + hamburger */}
              <div className="flex items-center gap-2 md:hidden">
                <div className="hidden lg:inline-block">
                  <Link className="bg-brandgreen text-black border border-transparent hover:border-brandyellow hover:bg-transparent hover:text-brandyellow px-6 py-3 font-medium rounded-full transition duration-300 inline-block" href="/contact" onClick={close}>
                    <span className="flex items-center justify-center transform translate-z-0 transition duration-300">
                      <PhoneIconSVG className="group-hover:fill-brandyellow group-hover:stroke-brandyellow" />
                      <span className="inline-block ml-1">Get In Touch</span>
                    </span>
                  </Link>
                </div>
                <button className="p-0 bg-transparent border-0 cursor-pointer w-8 h-8" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                  <svg width="30" height="20" viewBox="0 0 402 230" fill="none">
                    <path d="M239 13L13 13" stroke="white" strokeWidth="25" strokeLinecap="round" />
                    <path d="M389 217L128 217" stroke="white" strokeWidth="25" strokeLinecap="round" />
                    <path d="M389 115L13 115" stroke="white" strokeWidth="25" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center justify-between w-full">
                <Link className="p-0 m-0 hidden md:block" href="/" title="Home">
                   <LogoSVG className="h-16" />
                </Link>
                <ul className="flex items-center gap-8 list-none m-0 p-0">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <Link className="text-white text-base transition-colors duration-300 hover:text-brandgreen" href={l.href} title={l.label}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
                <Link className="bg-brandgreen text-black border border-transparent hover:border-brandyellow hover:bg-transparent hover:text-brandyellow px-6 py-3 font-medium rounded-full transition duration-300 inline-block" href="/contact">
                  <span className="flex items-center justify-center transform translate-z-0 transition duration-300">
                    <PhoneIconSVG />
                    <span className="inline-block ml-1">Get In Touch</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </nav>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/70 z-9998 ${menuOpen ? "" : "hidden"}`}
          onClick={close}
          aria-hidden="true"
        />

        {/* Mobile drawer */}
        <div className={`fixed top-0 w-[280px] h-screen bg-black z-9999 transition-[right] duration-300 ease p-6 overflow-y-auto ${menuOpen ? "right-0" : "-right-full"}`} role="dialog" aria-modal="true">
          <div className="flex justify-end mb-6">
            <button className="bg-transparent border-0 cursor-pointer w-8 h-8" onClick={close} aria-label="Close menu">
              <svg width="30" height="30" viewBox="0 0 532 533" fill="none">
                <path d="M133.062 133.562L398.935 399.435" stroke="white" strokeWidth="25" strokeLinecap="round" />
                <path d="M398.938 133.562L133.065 399.435" stroke="white" strokeWidth="25" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6 list-none p-0 m-0 items-center">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link className="text-white text-lg transition-colors duration-300 hover:text-brandgreen" href={l.href} onClick={close}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}
