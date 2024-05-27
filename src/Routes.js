import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import App from './pages/App';
import Booking from './pages/Booking'
import Doctors from './pages/doctors'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
  );
};

export default AppRoutes;
