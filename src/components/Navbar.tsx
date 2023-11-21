import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image
          src="/logo-with-favicon.png"
          alt="logo"
          width={200}
          height={100}
        />
      </Link>
      <div className="navbar-links">
        <Link href="/" className="nav-link">
          About Us
        </Link>
        <Link href="/" className="nav-link">
          Products
        </Link>
        <Link href="/" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  )
}
export default Navbar
