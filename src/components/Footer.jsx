import React from 'react'

const Footer = () => {
  return (
    <div className=" h-16 bg-emerald-900 w-full mt-3">
        <div className="flex flex-row sm:flex sm:flex-col">
            <div className="flex justify-center sm:flex sm:justify-center gap-3 h-10 pt-3">
                <p className="font-semibold justify-center ml-28 sm:flex">Avodal Streaming@2023</p>
                <p className="hidden sm:flex font-thin">Designed using Tailwind and React</p>
            </div>
        </div>
    </div>
  )
}

export default Footer