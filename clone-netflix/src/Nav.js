import React, { useEffect, useState } from 'react'
import './css/nav.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/database';


function Nav() {

    const [show, handleShow]=useState(false);


    const transitionNavbar=()=>{
        if(window.scrollY>100)
        {
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar)

        return ()=>{
            window.removeEventListener("scroll" ,transitionNavbar)
        }
    }, [])

  return (
    <div className={`nav ${show ?'nav_black':''}`}>
        <div className="nav_content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"  className='logo'/>
        
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            onClick={()=>firebase.auth().signOut()} className="nav_avatar" />
        </div>

    </div>
  )
}

export default Nav