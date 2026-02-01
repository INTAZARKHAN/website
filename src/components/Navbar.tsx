import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 text-sm font-medium">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        About
      </Link>
      <Link href="/projects" className="hover:text-blue-600">
        Projects
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        Contact
      </Link>
    </nav>
  );
}
