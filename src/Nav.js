import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(true);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_show'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />

      <a href="https://www.netflix.com/ng/login"> <img
        className='nav_avatar'
        src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png" title="Login"
        alt="Netflix login" /></a>
    </div>
  )
}

export default Nav