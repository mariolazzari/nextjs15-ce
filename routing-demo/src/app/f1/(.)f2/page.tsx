import Link from "next/link";

function InterceptedF2() {
  return (
    <div className="flex flex-col">
      <h1>Intercepted F2</h1>
      <Link href="/f4">F4</Link>
    </div>
  );
}

export default InterceptedF2;
