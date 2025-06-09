import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <h1>Welcome to My Next.js App</h1>
      <nav>
        <Link href="/about">About</Link> |{" "}
        <Link href="/contact">Contact</Link> |{" "}
        <Link href="/services">Services</Link>
      </nav>
    </div>
  );
}
