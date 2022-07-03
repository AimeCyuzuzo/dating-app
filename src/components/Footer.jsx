import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className="flex justify-around row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <h2>App name</h2>
                <h1 className='text-orange-700'>
                    LOGO
                </h1>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <h2>Why App name</h2>
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms of use</li>
                </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <h2>Useful links</h2>
                <ul>
                    <li>Why relationships?</li>
                    <li>Impacts of online dating</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer