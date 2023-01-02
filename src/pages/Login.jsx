import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${email} logged in`);
        console.log(email, pass);
    }

  return (

    <div className="grid place-items-center w-full h-screen">
        <div className="w-1/3">
            <div className="bg-gray-200 rounded-2xl h-fit w-full">
            <div className="text-3xl py-5 px-5 flex flex-row justify-center">
                <p className='font-semibold mx-3 my-3'>Login</p>
            </div>
            <form onSubmit={handleSubmit} className="grid place-items-center gap-5">
                <input className="rounded-full w-80 h-16 hover:scale-105"type="text" placeholder='  Enter Your Email Address..' required
                onChange={(e) => setEmail(e.target.value)} />
                <input className="rounded-full w-80 h-16 hover:scale-105"type="password" placeholder='  Enter Your Password..' required
                onChange={(e) => setPass(e.target.value)} />  
                <input className="rounded-full h-10 w-24 hover:scale-105 bg-blue-200 cursor-pointer font-semibold"type='submit' /> 

                <div className="pt-5 py-5 w-30">
                <p>New User? <a className="font-semibold hover:scale-110"href='/'>Register</a></p>  

                </div>
            </form>   
            </div>
        </div>
    </div>
  )
}

export default Login