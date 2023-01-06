import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        })
    }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className='nav_logo'
        src='https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png' alt='Netflix logo' />
    </div>
  )
}

export default Nav