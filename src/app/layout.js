import "./globals.css";
import TiltInit from "@/components/ui/TiltInit";

export const metadata = {
  title: "Sohel Malek | Professional Web Designer & WordPress Developer in Gujarat",
  description:
    "Expert web designer & WordPress developer crafting modern, responsive websites to grow your business online. View portfolio & services.",
  keywords:
    "web design, wordpress development, UI/UX design, responsive websites, Sohel Malek, website designer, web developer",
  authors: [{ name: "Sohel Malek" }],
  openGraph: {
    title: "Sohel Malek | Professional Web Designer & WordPress Developer in Gujarat",
    description:
      "Expert web designer & WordPress developer crafting modern, responsive websites to grow your business online.",
    url: "https://sohelmalek.com",
    images: [{ url: "https://sohelmalek.com/assets/img/Frame-48095890.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohel Malek | Professional Web Designer & WordPress Developer",
    description:
      "Expert web designer & WordPress developer crafting modern, responsive websites.",
    images: ["https://sohelmalek.com/assets/img/Frame-48095890.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sohel Malek",
              jobTitle: "Web Designer & WordPress Developer",
              url: "https://sohelmalek.com",
              email: "mailto:sohel@sohelmalek.com",
              telephone: "+91-97231-21537",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Borsad",
                addressRegion: "Gujarat",
                postalCode: "388540",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/sohelmalek",
                "https://www.linkedin.com/in/sohel-malek-b4b846196",
                "https://www.instagram.com/sohel_malek03",
                "https://www.facebook.com/sohelmalek03",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black font-sans" style={{ fontFamily: "Poppins, sans-serif" }}>
        {children}
        <TiltInit />
      </body>
    </html>
  );
}
