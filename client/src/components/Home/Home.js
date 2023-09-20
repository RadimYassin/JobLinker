import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { useSelector } from 'react-redux'
export default function Home() {

    const state = useSelector((state) => state.auth)
    console.log(state);
    return (
        <div className='h-screen flex flex-row justify-center'>




            <SearchBar />



        </div>
    )
}
