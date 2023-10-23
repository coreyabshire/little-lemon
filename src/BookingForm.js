import { useNavigate } from 'react-router-dom';
import './BookingForm.css'
import { useState, useEffect } from 'react';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function BookingForm() {
    let currentDate = new Date();
    let defaultAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    let availableOccasions = ["Birthday", "Anniversary"];

    let [date, setDate] = useState(formatDate(currentDate));
    let [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);
    let [time, setTime] = useState(availableTimes[0]);
    let [guests, setGuests] = useState(1);
    let [occasion, setOccasion] = useState(availableOccasions[0]);

    useEffect(() => {
        // todo - fetch available times from API
        // script provided for API gives 404 error
        // so unable to call its contents
        // fetchAPI(date);
    }, [date]);

    function handleDateChange(e) {
        setDate(e.target.value);
        let newTimes = [...defaultAvailableTimes];
        if (e.target.value === formatDate(currentDate)) {
            newTimes = newTimes.filter((time) => {
                let hour = parseInt(time.split(":")[0]);
                return hour >= currentDate.getHours();
            });
        }
        setAvailableTimes(newTimes);
        setTime(newTimes[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Date: " + date);
        console.log("Time: " + time);
        console.log("Guests: " + guests);
        console.log("Occasion: " + occasion);
        return false;
    }

    return (
        <form className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)} value={date} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((time) => {
                    return <option key={time}>{time}</option>
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" onChange={(e) => setGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                {availableOccasions.map((time) => {
                    return <option key={time}>{time}</option>
                })}
            </select>
            <input type="submit" value="Make Your reservation" onClick={handleSubmit} />
        </form>
    )
}

export default BookingForm;