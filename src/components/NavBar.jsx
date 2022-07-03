import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className="flex justify-around py-2">
            <div>
                <Link to="/">App name</Link>
            </div>
            <div className="flex justify-around px-5">
                <div>
                    <Link to="/about-help" className='text-sky-100 px-5 hover:text-sky-500'>About / Help</Link>
                </div>
                <div>
                    <Link to="/sign-in" className='text-sky-100 hover:text-sky-500 px-5'>Log in</Link>
                </div>
                <div>
                    <Link to="/create-account" className='text-sky-100 hover:text-sky-500 px-5'>Create account</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar