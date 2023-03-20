import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';

import { addToken } from './reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  dispatch(addToken());

  console.log(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;