import Link from "next/link"

export default function navbar() {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Link className="btn btn-ghost text-xl" href="/">CarsAI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="#features">Features</Link></li>
      <li><Link href="#pricing">Pricing</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn"><Link href="/dashboard">Dashboard</Link></button>
  </div>
</div>
    )
}