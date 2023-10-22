import './App.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
