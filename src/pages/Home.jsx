import React from 'react'
import About from '../components/About'
import hero from '../assets/hero.jpg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="h-screen"> 
        <div className="flex flex-row justify-between mx-10 my-36">
            <div className="flex flex-col gap-20">
                <p className="text-7xl">Avodal Streaming</p>
                <p className="text-2xl">Stream all games throughout the season</p>
            </div>
            <div>
                <img className="rounded-2xl" src={hero} alt="ronaldo"/>
            </div>
        </div>
        <About />
        <Footer />
    </div>
  )
}

export default Home