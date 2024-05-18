import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();

  return (
    <nav>
      <Link href="/">
        <p className="text-[25px] font-bold text-orange-500">Roam Right</p>
      </Link>
      {
        sideMenu && <ul>
          <li>
            <Link href="">Recommended Places</Link>
          </li>

          <li>
            <Link href="">About Us</Link>
          </li>

          <li>
            <Link href="">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {
              session?.user ?
                <div>
                  <span className="mx-1">{session?.user?.name}</span>
                  <span> | </span>
                  <Logout />
                </div>
                : <Link href="/login" className="login">Login</Link>
            }
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navbar