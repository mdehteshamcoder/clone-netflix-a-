import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';

import HomePage from './HomePage';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubsceribe=auth.onAuthStateChanged(user=>{
      if(user)
      {
        dispatch(login({
          uid: user.uid,
          email:user.email
        }))
      }
      else{
        dispatch(logout)
      }
    })
    return unsubsceribe;
  }, [])

  return (
    <div className='App'>
     {
     !user ? (<Login/>) :
     (<HomePage/>)
     } 
    </div>
   
  );
}

export default App;
