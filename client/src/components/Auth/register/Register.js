import React, { useState } from 'react'
import Button from '../../../features/Button'
export default function Register({ setShowModal,setOpenLogin }) {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }



    const HandelSubmit=async(e)=>{
e.preventDefault()

 
if (inputs.password == inputs.confirmPassword) {
    

    console.log("hello");
}else{
    console.log("comfirme passsword");
}


        
    }
const handechangeModal=()=>{

    setShowModal(false)
    setOpenLogin(true)
}
    return (
        <>
            <div

className="parent flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none"
>
                <div className="relative auth  ">
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
                          
                            <section className="bg-gray-50 dark:bg-gray-900">
                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                        JobLinker
                                    </a>
                                    <div className="w-full  rounded-lg  dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                        <div className="p-6 space-y-8 md:space-y-8 sm:p-8">
                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                              Create and account
                                            </h1>
                                            <form className="space-y-4 md:space-y-6" onSubmit={HandelSubmit}>
                                            <div>
                                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                    <input type="email"
                                                     name="email"  
                                                    value={inputs.email || ""}
                                                    onChange={handleChange}
                                                    
                                                    id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                                </div>
                                                <div>
                                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                    <input 
                                                    
                                                    type="password"
                                                    value={inputs.password || ""}
                                                    onChange={handleChange}
                                                    name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                                </div>
                                                <div>
                                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                                    <input type="password" 
                                                    value={inputs.confirmPassword || ""}
                                                    onChange={handleChange}
                                                    name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                                    </div>
                                                </div>
                                                <Button type="submit" text={"Login to your account"} />

                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Already have an account?  <span onClick={handechangeModal} className="font-medium text-primary-600 hover:underline dark:text-primary-500">login</span>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section> 
                                         </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-20 bg-black" onClick={() => setShowModal(false)}></div>

        </>
    )
}




