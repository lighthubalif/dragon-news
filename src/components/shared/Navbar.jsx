import Image from "next/image";
import React from "react";
import useAvater from '@/assets/user.png'
import Link from "next/link";   
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between gap-2 mt-6">
        <div></div>
      <ul className="flex justify-between items-center text-gray-600 gap-4">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/carrer">Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
<Image src={useAvater} alt="User Avatar" width={40} height={40} />
<button className="btn btn-primary">
    <Link href="/login">Login</Link>
</button>

      </div>
    </div>
    

    
  );
};

export default Navbar;
