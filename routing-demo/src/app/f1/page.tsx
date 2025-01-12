import Link from "next/link";

function F1Page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl mb-4"> F1 Page</h1>
      <Link href="/f1/f2">F2</Link>
      <Link href="/f3">F3</Link>
    </div>
  );
}

export default F1Page;
