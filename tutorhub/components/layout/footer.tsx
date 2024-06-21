import Link from "next/Link"

export default function Footer() {
return (
<footer className="w-full mt-4 grid md:grid-cols-2 lg:grid-cols-4 bg-slate-800 text-slate-100">
    <ul>
        <Link href="/"><h1 className="text-2xl p-2" >TutorHub</h1></Link>
    </ul>
    <ul>
        <li><Link href="/about" className="mx-5">About</Link></li>
        <li><Link href="/get-started" className="mx-5">Get started</Link></li>
        <li><Link href="/sign-in" className="mx-5">Sign in</Link></li>
    </ul>
</footer>
)
}