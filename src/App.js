import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Football from './pages/Football';
import NFL from './pages/NFL';
import NBA from './pages/NBA';
import Rugby from './pages/Rugby';
import F1 from './pages/F1';

function App() {
  return (
    <div className="flex flex-col">
        <div className='flex flex-row'>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='Football' element={<Football />} />
              <Route path='NFL' element={<NFL />} />
              <Route path='NBA' element={<NBA />} />
              <Route path='F1' element={<F1 />} />
              <Route path='Rugby' element={<Rugby />} />
              <Route path='Login' element={<Login />} />
              <Route path='Register' element={<Register />} />
            </Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
