import './BookingPage.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingForm from './BookingForm';

function BookingPage() {
    return (
        <>
            <Header />
            <div className="booking-page-content">
                <h1>Book a Reservation</h1>
                <BookingForm />
            </div>
        </>
    );
}

export default BookingPage;