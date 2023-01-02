import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${email} Registered`);
        console.log(email, pass, name);
    }

  return (

    <div className="grid place-items-center w-full h-screen">
        <div className="w-2/3">
            <div className="bg-gray-200 rounded-2xl h-fit w-full">
            <div className="text-3xl py-5 px-5 flex flex-row justify-center">
                <p className='font-semibold mx-3 my-3'>Register</p>
            </div>
            <form onSubmit={handleSubmit} className="grid place-items-center gap-5">
                <input className="rounded-full w-2/3 h-16 hover:scale-105"type="text" placeholder='  Enter Your Name..' required
                onChange={(e) => setName(e.target.value)} />
                <input className="rounded-full w-2/3 h-16 hover:scale-105"type="text" placeholder='  Enter Your Email Address..' required
                onChange={(e) => setEmail(e.target.value)} />
                <input className="rounded-full w-2/3 h-16 hover:scale-105"type="password" placeholder='  Enter Your Password..' required
                onChange={(e) => setPass(e.target.value)} />  
                <input className="rounded-full h-10 w-24 hover:scale-105 bg-blue-200 cursor-pointer font-semibold"type='submit' /> 

                <div className="pt-5 py-5 w-30">
                <p>Already have an account? <a className="font-semibold hover:scale-110"href='/'>Login</a></p>  

                </div>
            </form>   
            </div>
        </div>
    </div>
  )
}

export default Register