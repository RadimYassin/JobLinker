import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import "./style.css"

import { useSelector } from 'react-redux'
import FilterJobs from '../Filter/FilterJobs'
export default function Home() {
    const state = useSelector((state) => state.auth)
    console.log(state);
    return (
        <div className='h-screen  Container-home'>


            <div className='Container-search'>
                <SearchBar />
            </div>
            <div className='Container-filter   border-b border-gray-200'>

             <FilterJobs/>
            </div>

            <div className='Container-content '>
                hello
            </div>



        </div>
    )
}
