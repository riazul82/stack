import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="py-[30px] px-[80px]">
      <Outlet />
    </div>
  );
}

export default App;