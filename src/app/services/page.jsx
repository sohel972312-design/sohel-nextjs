import Container from "@/components/ui/Container";
import Link from "next/link";
import Banner from "@/components/sections/Banner";

export const metadata = {
  title: "Services | Sohel Malek | Professional Web Designer & Developer",
  description: "Explore the services I offer as a professional web designer and WordPress developer. From website design to development, I provide comprehensive digital solutions.",
};

export default function Services() {
    return (
        <>
            <Banner
                title="Services"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Services" }
                ]}
                backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
            />

            <Container>
            </Container>

        </>

    );
}