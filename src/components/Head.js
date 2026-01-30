import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()

  const toggleHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
  
    <div className='grid grid-flow-col shadow-xl '>
        <div className='flex m-2 p-4 col-span-1'>
        <img onClick={toggleHandler} className='h-8 cursor-pointer' src="https://imgs.search.brave.com/zUc1MEiLVAkUFnzjhXQPRqPDS6baHazY1eCFNUOXrKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/NjYzLzgyMC9zbWFs/bC9oYW1idXJnZXIt/bWVudS1iYXItZmxh/dC1pY29uLWZvci1h/cHBzLWFuZC13ZWJz/aXRlcy1mcmVlLXZl/Y3Rvci5qcGc"/>
        <img className='h-8 ml-3' src = "https://imgs.search.brave.com/4TfKXZsgw6VMFYOyjWz8j5VhIY8fK2JmlvHbQBw8Klo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXlvdXR1YmUtaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTQzMjU2/MC5wbmc_Zj13ZWJw/Jnc9MjU2"/>
        </div>
        <div className='flex m-2 p-2 col-span-10'>
        <input className='w-1/2 h-10 rounded-l-full border border-black-200'/>
        <button className='bg-gray-300 rounded-r-full p-2 h-10 '>Search</button>
        </div>
        <div className='flex m-2 p-2 col-span-1'>
        <img className='h-8 cursor-pointer'src="https://imgs.search.brave.com/8U2Qnx4d9qhIF9rszHAIN83Ml-K560j0w8J-RW8iokQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvb3V0bGluZS13/ZWItYXBwbGljYXRp/b24tMS8xNi9wZW9w/bGUtNTEyLnBuZw"/>
        </div>
    </div>
  
  )
}

export default Head