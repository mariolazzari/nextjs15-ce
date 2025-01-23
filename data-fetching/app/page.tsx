import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-center">Data fetching</h1>

      <div className="flex gap-4">
        <Link href="/users-client">Users client</Link>
        <Link href="/users-server">Users server</Link>
      </div>
    </main>
  );
}
