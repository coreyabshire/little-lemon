import './App.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/bookingConfirmed" element={<ConfirmedBooking />}></Route>
    </Routes>
  );
}

export default App;
