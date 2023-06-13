
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  // The useEffect hook with empty dependencies array will run once after the initial render
  useEffect(() => {
    // The setTimeout function will delay the opening of the navigation bar by 0.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // 500ms delay

    // Clear the timeout if the component is unmounted before the timeout finishes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array so the effect only runs once on mount

return(
  <nav className={isOpen ? 'open' : ''}>
    <h1 className='nav-title'>Title</h1>
    <img className='nav-logo' src="../images/home/logo.png" alt="logo"/>
    <ul className='nav-links'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/info">Info</Link></li>
     <li><Link to="/about">About</Link></li>
   
    </ul>
  </nav>
);
}

export default Navbar;