import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import "./style.css"

import { useSelector } from 'react-redux'
import FilterJobs from '../Filter/FilterJobs'
import Button from '../../features/Button'
export default function Home() {
    const state = useSelector((state) => state.auth)
    console.log(state);
    return (
        <div className='  Container-home'>


            <div className='Container-search'>
                <SearchBar />
            </div>
            <div className='Container-filter  m-3 border-b border-gray-200'>

                <FilterJobs />
            </div>

            <div className='Container-content flex justify-center  '>
                <div className="container my-12 mx-auto px-4 md:px-12">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">


                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4">
                                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                    </button>
                                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center pb-5">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
                                    <div className=" mt-4 md:mt-6">
                                        <div className=' flex gap-x-10 justify-between items-center '>
                                            <span className='text-sm text-gray-500-600'>location :</span>
                                            <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
                                        </div>

                                        <div className=' flex gap-x-10 justify-between items-center '>
                                            <span className='text-sm text-blue-400'>Remote :</span>
                                            <span className='text-xs text-gray-400'>800-1500$</span>
                                        </div>

                                    </div>

                                    <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
                                       

                                            <Button type="button" text={"Applay"} width={"90%"}/>
                                    


                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4">
                                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                    </button>
                                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center pb-5">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
                                    <div className=" mt-4 md:mt-6">
                                        <div className=' flex gap-x-10 justify-between items-center '>
                                            <span className='text-sm text-gray-500-600'>location :</span>
                                            <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
                                        </div>

                                        <div className=' flex gap-x-10 justify-between items-center '>
                                            <span className='text-sm text-blue-400'>Remote :</span>
                                            <span className='text-xs text-gray-400'>800-1500$</span>
                                        </div>

                                    </div>

                                    <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
                                       

                                            <Button type="button" text={"Applay"} width={"90%"}/>
                                    


                                    </div>
                                </div>
                            </div>

                        </div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-5">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">RaGit</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"> software enginner </span>
        <div className=" mt-4 md:mt-6">
            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-gray-500-600'>location :</span>
                <span className='text-xs text-gray-400'>Morocco , beni mellal</span>
            </div>

            <div className=' flex gap-x-10 justify-between items-center '>
                <span className='text-sm text-blue-400'>Remote :</span>
                <span className='text-xs text-gray-400'>800-1500$</span>
            </div>

        </div>

        <div className=" w-full flex justify-center items-center mt-2 md:mt-3">
           

                <Button type="button" text={"Applay"} width={"90%"}/>
        


        </div>
    </div>
</div>

</div>

                    </div>
                </div>

            </div>


        </div>
    )
}
