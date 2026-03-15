import Link from "next/link";
export default function Banner({ title = "Page Title", breadcrumb = [{ label: "Home", href: "/" }], backgroundImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" }) {
    return (
        <>
            <div
                className="relative h-72 pt-16  md:h-80 sm:pt-16 md:pt-24 w-full flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            >
                {/* Dark Overlay to match the reference image's mood */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

                {/* Content Container */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-2xl md:text-4xl   font-['Unbounded'] font-bold text-white tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {title}
                    </h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium">
                        {breadcrumb.map((item, index) => (
                            <span key={index} className="flex items-center">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-gray-400 cursor-default">
                                        {item.label}
                                    </span>
                                )}
                                {index < breadcrumb.length - 1 && (
                                    <span className="text-lime-400 font-bold select-none ml-2">
                                        »
                                    </span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};
