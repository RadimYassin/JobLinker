import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from '../Auth/Login/Login'
import Register from '../Auth/register/Register'

export default function Navbar() {

  const [OpenLogin,setOpenLogin]=useState(false)
  const [OpenRegister,setOpenRegister]=useState(false)
  const handleOpenLogin = () => setOpenLogin((cur) => !cur);
  const handleOpenRegister = () => setOpenRegister((cur) => !cur);


  return (
<>



    <nav className="bg-white p-4 dark:bg-gray-900  w-full z-20  border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 ">
        <div style={{ height: "100%" }} className='flex justify-between items-center gap-20 '>
          <Link to="/" className="flex items-center py-4 ">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JobLinker</span>
          </Link>
          <Link to="/jobs" className="flex  items-center py-4  border-b-2 border-blue-500  hidden md:block">
            Jobs
          </Link>

        </div>

        <div className="flex md:order-2">
          <div className=' flex justify-between gap-4 items-center'>

              <button type="button"
              onClick={handleOpenLogin}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

              >Sign in</button>



            <span className='text-gray-400  hidden md:block'>/</span>

            <Link className='hidden md:block'>Post Jobs</Link>
          </div>

          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" stroke-strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className=" justify-between hidden w-full  md:w-auto md:order-1 lg:hidden " id="navbar-sticky">
          <ul class="flex flex-col gap-8 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li className=''>
              <NavLink to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
            </li>
            <li>
              <NavLink to="/a" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
            </li>
            <li>
              <NavLink to="/b" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>

    {
      OpenLogin  && <Login setOpenRegister={setOpenRegister} setShowModal={setOpenLogin}/>
    }


{
      OpenRegister  && <Register setOpenLogin={setOpenLogin}  setShowModal={setOpenRegister}/>
    }

</>
  )
}
