import Link from "next/link";

export default function Button({ children, variant = "primary", href, className = "" }) {

  let styles =
    "bg-brandgreen text-black border border-transparent group hover:!bg-transparent hover:border-brandyellow hover:text-brandyellow px-6 py-3 font-medium rounded-full transition duration-300 inline-block";

  if (variant === "primary") {
    styles += " bg-brandgreen text-black";
  }

  if (variant === "outline") {
    styles += " border border-brandgreen text-brandgreen hover:bg-brandgreen hover:text-black";
  }

  styles += ` ${className}`;

  if (href) {
    // Check if it's an external link (starts with http) or internal
    if (href.startsWith('http') || href.startsWith('//')) {
      return (
        <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    } else {
      // Internal link - use Next.js Link
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button className={styles}>
      {children}
    </button>
  );
}