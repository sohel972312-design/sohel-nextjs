import Link from "next/link";
import { LogoSVG, SocialLinks } from "@/lib/shared";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="text-center">
            <Link href="/" title="Home" className="inline-block mx-auto">
              <LogoSVG className="logo mx-auto" />
            </Link>
          </div>
          {/* Quick links */}
          <div className="flex flex-wrap footer_links justify-center items-baseline text-center">
            <div className="h6 textgreen unbounded_semibold mr-2">Quick Links —</div>
            {["About Us", "Services", "Blog", "Contact"].map((l) => (
              <p key={l} className="ml-3 pr-3 mb-2 lg:mb-0">
                <a href="#">{l}</a>
              </p>
            ))}
          </div>
          {/* Contact */}
          <div className="flex flex-wrap footer_links justify-center gap-4 items-baseline">
            <div className="flex flex-wrap justify-center items-baseline mr-4">
              <div className="h6 textgreen unbounded_semibold mr-2">Phone No. —</div>
              <p className="mb-0"><a href="tel:9723121537">+9197231 21537</a></p>
            </div>
            <div className="flex flex-wrap justify-center items-baseline">
              <div className="h6 textgreen unbounded_semibold mr-2">Email Id —</div>
              <p className="mb-0"><a href="mailto:sohel@sohelmalek.com">sohel@sohelmalek.com</a></p>
            </div>
          </div>
          {/* Social */}
          <div className="flex justify-center">
            <div className="social-links">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightbox py-3">
        <div className="container mx-auto px-4">
          <p className="mb-0 footer_links text-center regular">
            Copyright &copy; {year} <a href="/">Sohel</a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
