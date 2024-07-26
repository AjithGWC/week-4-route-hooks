import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './index.css';
import './App.css';
import State from './components/use_state';
import Effect from './components/use_effect';

const App = () => {
  return (
    <Router>
      <div className='grid grid-cols-12 bg-gray-300'>
        <div className='col-span-2'>
          <nav className='sidebar'>
            <ul>
              <li className={({ isActive }) => isActive ? 'active' : ''}>
                <NavLink className={"w-full"} to="/">Use State</NavLink>
              </li>
              <li className={({ isActive }) => isActive ? 'active' : ''}>
                <NavLink to="/effect">Use Effect</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className='col-span-10'>
          <Routes>
            <Route path="/" element={<State />} />
            <Route path="/effect" element={<Effect />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
