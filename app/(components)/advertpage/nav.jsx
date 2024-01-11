import Link from "next/link"
import Image from "next/image"
import firstLogo from "@/public/icons/navicon.png"

export default function navbar() {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Link className="btn btn-ghost text-xl hover:bg-white" href="/"><Image src={firstLogo} height={90} width={90}></Image></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="#features">Features</Link></li>
      <li><Link href="#pricing">Pricing</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <Link href="/dashboard"><button className="btn">Dashboard</button></Link>
  </div>
</div>
    )
}