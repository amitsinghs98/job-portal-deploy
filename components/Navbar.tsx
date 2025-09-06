import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">JobPortal</Link>
      <div className="space-x-4">
        <Link href="/jobs">Jobs</Link>
        <Link href="/post-job">Post Job</Link>
      </div>
    </nav>
  )
}