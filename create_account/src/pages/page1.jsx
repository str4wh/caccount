import React from 'react'
import Nav from '../Components/nav'

function Page1() {

  return (
    <div>
        <Nav />
        <p>this is page 1</p>
        <div className='flex items-center justify-center mt-24'>
          <div className=" bg-gradient-to-r from-red-800 via-red-500 to-red-700 w-full max-w-md p-6 rounded-4xl">

            {/*HEADER */}
            <div className='text-center text-white'>
              <h1 className='font-extrabold text-[36px] mb-8'>Create Account</h1>
              <h3 className='font-semibold mb-8'>Create your Account with us</h3>

               {/*Sign up form */}
               <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {/*Full Name */}
                  <div>
                    <label className="block text-[18px] font-semibold text-white mb-2" htmlFor="FullName">Full Name</label>
                    <input type="text" 
                    id="FullName"
                    name="FullName"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder='Enter your full name'
                    required
                    />
                  </div>
                  {/*email */}
                  <div>
                    <label className="block text-[18px] font-semibold text-white mb-2" htmlFor="FullName">Email</label>
                    <input type="text" 
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder='Enter your email'
                    required
                    />
                    {/*password */}
                    <div>
                      
                    </div>
                  </div>
               </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page1