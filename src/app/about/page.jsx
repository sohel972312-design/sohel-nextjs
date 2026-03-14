import Link from "next/link";
export default function About() {
    return(
<>
<div className="text-white">
    about page sohel malek <br/>
    link to <Link className="text-white" href="/contact">Contact1</Link> <br/>
    link to <Link className="text-white" href="/">Home</Link> 
</div>

</>

    );
};
