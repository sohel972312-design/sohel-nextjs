import Link from "next/link";
export default function Contact() {
    return(
<>
<div className="text-white"> 
    Contact page new contact sam <br />
    link to <Link className="text-white" href="/about">About</Link> <br />
    link to <Link className="text-white" href="/">Home</Link>
</div>

</>

    );
};
