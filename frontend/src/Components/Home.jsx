import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const [add, setadd] = useState(false)

    return (

        <header className="w-full bg-gradient-to-br from-blue-600 to-black/90 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Empty div for left spacing (keeps title centered) */}
                <div className="w-24"></div>

                {/* Center Title */}
                <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                    Feedback Data 
                </h1>

                {/* Right Button */}
                {
                    add === false ? 
               
                <Link to={'/addfeedback'}>
                    <button onClick={()=>setadd(!add)} className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300" >
                        Add feedback
                    </button>
                </Link> :
                <Link to={'/viewfeedback'}>
                    <button onClick={()=>setadd(!add)} className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300" >
                        View feedback
                    </button>
                </Link>
                 }
            </div>
        </header>
    )
}
