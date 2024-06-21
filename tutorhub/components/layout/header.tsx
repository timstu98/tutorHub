import Link from "next/Link"

export default function Header() {
return (
<header className="flex justify-between bg-slate-800 text-slate-100 items-center pb-4 sticky top-0 opacity-90">
<Link href="/"><h1 className="text-2xl p-2" >TutorHub</h1></Link>
<div >
<Link href="/about" className="mx-5">About</Link>
<Link href="/get-started" className="mx-5">Get started</Link>
<Link href="/sign-in" className="mx-5">Sign in</Link>
</div>
</header>
)
}