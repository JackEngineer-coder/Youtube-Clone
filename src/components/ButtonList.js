import React from 'react'

const ButtonList = () => {
    const buttons = ["All", "Music", "Sports","Cricket"]
  return (
    <div div className= "flex flex-row" >
        {buttons.map((data)=>
        <div className= "flex flex-row">
            <button className = "m-2 p-2 bg-gray-300 rounded-lg">{data}</button>
            </div>)}
    </div>
  )
}

export default ButtonList