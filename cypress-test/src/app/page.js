import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Home</h1>

      <Link href='/profile'>
        Go to Profile Page
      </Link>
    </main>
  );
}
