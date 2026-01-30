import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {
    const menu = useSelector((store)=>store.app.menu)
    console.log("menu - ", menu)

 
  return (
    <div className='bg-white shadow-lg w-48 h-auto mt-1'>
        <ul className='m-4'>
            <li className='font-bold'>Subscription</li>
            {menu?<li>🏠︎</li>:<li>🏠︎ Home</li>}
            <li>My Channel</li>
            <li>History</li>
        </ul>
         <ul  className='m-4'>
            <li className='font-bold'>Subscription</li>
            <li>Home</li>
            <li>My Channel</li>
            <li>History</li>
        </ul>
         <ul  className='m-4'>
            <li className='font-bold'>Subscription</li>
            <li>Home</li>
            <li>My Channel</li>
            <li>History</li>
        </ul>
         <ul  className='m-4'>
            <li className='font-bold'>Subscription</li>
            <li>Home</li>
            <li>My Channel</li>
            <li>History</li>
        </ul>
    </div>
  )
}

export default Sidebar