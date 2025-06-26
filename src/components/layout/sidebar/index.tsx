import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="w-64 bg-gray-100 p-4 h-screen">
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}