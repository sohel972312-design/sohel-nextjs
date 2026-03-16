import Container from "@/components/ui/Container";
import Link from "next/link";
import Banner from "@/components/sections/Banner";

export const metadata = {
  title: "About Sohel Malek | Professional Web Designer & Developer",
  description: "Learn about Sohel Malek's journey as a professional web designer and WordPress developer. Discover my skills, experience, and passion for creating exceptional digital experiences.",
};

export default function About() {
    return (
        <>
            <Banner
                title="About Me"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "About" }
                ]}
                backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
            />

            <Container>
              <div className="text-black">sohel malek 1137</div>
            </Container>

        </>

    );
}
