import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { ForgotPassword } from '../pages/ForgotPassword';
import { Home } from '../pages/Home';
import { Irrelevant } from '../pages/Irrelevant';
import { Login } from '../pages/Login';
import { NoMatchPath } from '../pages/NoMatchPath';
import ResetPassword from '../pages/ResetPassword';

type AppRoutesProps = {
  hasAuth : boolean
}

export function AppRoutes ({hasAuth}:AppRoutesProps) {
  return (    
    <Routes>
        <Route path="/login" element={!hasAuth ? <Login /> : <Navigate to={"/"} />} />                
        <Route path="/" element={hasAuth ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/irrelevant" element={<Irrelevant />} />    
        <Route path='/forgot_password' element={!hasAuth ? <ForgotPassword /> : <Navigate to={"/"} /> } /> 
        <Route path='/reset_password/:secret_key' element={!hasAuth ? <ResetPassword /> : <Navigate to={"/"} />} />
        <Route path='*' element={<NoMatchPath />} />
    </Routes>    
  )
}
