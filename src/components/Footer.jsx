import React from 'react'

function Footer() {
  return (
    <footer className='bg-veryDarkBlue'>
        {/* container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            {/* logo & social links */}
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
                {/* logo */}
                <div>
                    <img src="img/logo-white.svg" className='h-8' alt="" />
                </div>
                {/* social */}
                <div className="flex justify-center space-x-4">
                    <a href="">
                        <img src="img/icon-facebook.svg" className='h-8' alt="" />
                    </a>
                    <a href="">
                        <img src="img/icon-youtube.svg" className='h-8' alt="" />
                    </a>
                    <a href="">
                        <img src="img/icon-twitter.svg" className='h-8' alt="" />
                    </a>
                    <a href="">
                        <img src="img/icon-pinterest.svg" className='h-8' alt="" />
                    </a>
                    <a href="">
                        <img src="img/icon-instagram.svg" className='h-8' alt="" />
                    </a>
                </div>
            </div>
            <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                    <a href=""className='hover:text-brightRed'>Home</a>
                    <a href=""className='hover:text-brightRed'>Pricing</a>
                    <a href=""className='hover:text-brightRed'>Products</a>
                    <a href=""className='hover:text-brightRed'>About</a>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <a href=""className='hover:text-brightRed'>Careers</a>
                    <a href=""className='hover:text-brightRed'>community</a>
                    <a href=""className='hover:text-brightRed'>Privacy policy</a>
                    
                </div>
            </div>
            {/* input */}
            <div className="flex flex-col justify-between">
                <form >
                    <div className="flex space-x-3">
                        <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder='Leave us a message' />
                        <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                    </div>
                </form>
                <div className="hidden text-white md:block">
                    Copyright &copy; 2023, All Rights Reserverd
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer