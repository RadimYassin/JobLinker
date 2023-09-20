import React from 'react'
import Button from '../../../features/Button'
import "../style.css"
export default function Login({ setShowModal ,setOpenRegister}) {


    const HandelSubmit=(e)=>{
        e.preventDefault()

        console.log("ok");
    }

    const handechangeModal=()=>{
        setShowModal(false)
        setOpenRegister(true)
    }
    return (





        <>
            <div

                className="parent flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none"
            >
                <div  className="relative auth  ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-end p-5  rounded-t">


                            <button className="text-gray-500" onClick={() => setShowModal(false)}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative  flex-auto">
                            <section class="bg-gray-50 dark:bg-gray-900">
                                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                        JobLinker
                                    </a>
                                    <div class="w-full  rounded-lg  dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                        <div class="p-6 space-y-8 md:space-y-8 sm:p-8">
                                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Sign in to your account
                                            </h1>
                                            <form class="space-y-4 md:space-y-6" onSubmit={(e)=>HandelSubmit(e)}>
                                                <div>
                                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                                </div>
                                                <div>
                                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                    <input type="password"
                                                        name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                                </div>
                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-start">
                                                        <div class="flex items-center h-5">
                                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                                        </div>
                                                        <div class="ml-3 text-sm">
                                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                                </div>
                                                <Button type="submit" text={"Login to your account"} />

                                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Don’t have an account yet? <span onClick={handechangeModal} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>                                </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0  bg-black" onClick={() => setShowModal(false)}></div>

        </>







    )
}


// style={{backgroundColor:"rgba(15, 58, 175, 0.055)"}}
