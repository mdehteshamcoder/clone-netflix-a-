import React, { useState } from 'react';
import "./css/login.css";
import SignUp from './SignUp';


function Login() {

    const[signIn, SetSignIn]=useState(false);

  return (

    <div className="login">
        <div className="login_header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" className='login_logo'/>
            
            <button className="login_button">
                Sign In
            </button>
        </div>

        <div className='login_body'>
            {
                signIn ? (<SignUp/>) : (
<>
<h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <form className='login_form'>
                <input type="text" placeholder="Email Address"/>
                <button onClick={()=>SetSignIn(true)}>Get Started</button>
            </form>
       

</>
                )
            }
    </div>
        <div className='login_gradient'>

        </div>

    </div>
  )
}
export default Login
