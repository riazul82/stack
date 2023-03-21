import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';

import { addToken } from './reducers/authReducer';
import { useDispatch } from 'react-redux';
import Sales from './pages/Sales';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
  }, [dispatch]);

  const RequireAuth = ({ children }) => {
    return localStorage.getItem('token') ? (children) : <Navigate to="/signin" replace />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='/users' element={<RequireAuth><Users /></RequireAuth>} />
        <Route path='/sales' element={<RequireAuth><Sales /></RequireAuth>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;