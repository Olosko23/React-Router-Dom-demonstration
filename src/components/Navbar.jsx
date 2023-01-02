import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-emerald-800 w-full h-20">
        <div className="flex flex-row justify-between px-6 py-6">
            <div className="font-semibold text-3xl">
                <Link to='/'>Avodal Streams</Link>
            </div>
            <div className="">
                <ul className="flex flex-row justify-between gap-5">
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/'>Home</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/football'>Football</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/F1'>F1</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/NBA'>NBA</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/NFL'>NFL</Link></li>
                    <li className="hover:scale-105 font-medium cursor-pointer"><Link to='/Rugby'>Rugby</Link></li>
                </ul>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar