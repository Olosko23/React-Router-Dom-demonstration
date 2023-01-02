import React from 'react'
import About from '../components/About'
import hero from '../assets/hero.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen"> 
        <div className="flex flex-row justify-between mx-10 my-36">
            <div className="flex flex-col gap-20">
                <p className="text-7xl">Avodal Streaming</p>
                <p className="text-2xl">Stream all games throughout the season</p>
                <p><button className="bg-slate-400 rounded-2xl w-28 h-9 hover:scale-105 text-lg font-semibold">
                  <Link to='/Login'>Get Started</Link>
                  </button></p>
            </div>
            <div className="hidden sm:flex">
                <img className="rounded-2xl" src={hero} alt="ronaldo"/>
            </div>
        </div>
        <About />
        <Footer />
    </div>
  )
}

export default Home