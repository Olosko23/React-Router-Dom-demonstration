import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className="bg-emerald-800 w-full h-20">
        <div className="flex flex-row justify-between px-6 py-6">
            <div className="font-semibold text-3xl hidden sm:flex">
                <Link to='/'>Avodal Streams</Link>
            </div>
            <div className="hidden sm:flex">
                <ul className="flex flex-row justify-between gap-5">
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/'>Home</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/football'>Football</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/F1'>F1</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/NBA'>NBA</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/NFL'>NFL</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/Rugby'>Rugby</Link></li>
                </ul>
            </div>
            <div onClick={() => setNav(!nav)} className=" w-full flex md:hidden pr-2 z-10 cursor-pointer">

                {nav ? <FaTimes className="pt-1"size={30}/>: <FaBars className="pt-1" size={30} />}

            </div>
                { nav && (
                    <ul className="flex flex-col justify-center absolute items-center top-0 left-0 w-full h-screen bg-emerald-900">
                       <li onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to='/'>Home</Link></li>
                       <li onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to='/football'>Football</Link></li>
                       <li onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to='/F1'>F1</Link></li>
                       <li onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to='/NBA'>NBA</Link></li>
                       <li onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to='/NFL'>NFL</Link></li>
                       <li onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to='/Rugby'>Rugby</Link></li>
                    </ul>
                )}
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar