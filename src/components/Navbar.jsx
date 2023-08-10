import React,{useState} from 'react'

function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = () => (
        setIsMenuOpen(prevState => !prevState)
    )
  return (
   
    <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="pt-2">
        <img src="img/logo.svg" alt="" />
      </div>
      <div className={`hidden md:flex space-x-6 ${isMenuOpen ? 'hidden' : 'block'}`}>
        <a href="" className='hover:text-darkGrayishBlue font-semibold'>Pricing</a>
        <a href="" className='hover:text-darkGrayishBlue font-semibold'>Product</a>
        <a href="" className='hover:text-darkGrayishBlue font-semibold'>About us</a>
        <a href="" className='hover:text-darkGrayishBlue font-semibold'>Careers</a>
        <a href="" className='hover:text-darkGrayishBlue font-semibold'>Community</a>
      </div>
      <a
        href=""
        className={`hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight ${isMenuOpen ? 'hidden' : 'block'}`}
      >
        Get Started
      </a>
      <button
        id="menu-btn"
        className={`block hamburger md:hidden focus:outline-none ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="hamburgertop"></span>
        <span className="hamburgermiddle"></span>
        <span className="hamburgerbottom"></span>
      </button>
    </div>
    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div
        id="menu"
        className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md sm:w-auto sm:self-center"
      >
        <a href="">Pricing</a>
        <a href="">Product</a>
        <a href="">About us</a>
        <a href="">Careers</a>
        <a href="">Community</a>
      </div>
    </div>
  </nav>
    
  )
}

export default Navbar