import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul className="w-full flex gap-12 align-center justify-center p-4 rounded-full m-6">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/project">Project</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}