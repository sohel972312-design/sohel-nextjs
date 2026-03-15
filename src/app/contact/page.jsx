import Link from "next/link";
import Banner from "@/components/sections/Banner";

export const metadata = {
  title: "Contact Sohel Malek | Get In Touch for Web Design Projects",
  description: "Ready to start your web design project? Contact Sohel Malek for professional web design and development services. Let's discuss your requirements and bring your vision to life.",
};

export default function Contact() {
    return(
<>
<Banner
        title="Contact Me"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: null }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
      />
<div className="text-white"> 
    Contact page new contact sam <br />
    link to <Link className="text-white" href="/about">About</Link> <br />
    link to <Link className="text-white" href="/">Home</Link>
</div>

</>

    );
};
