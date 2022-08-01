import Button from 'react-bootstrap/Button'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Custom.css';

const Allbooking = () => {
  
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/bookings')
    .then(res => {
      setBooking(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));
  }, [])

  const style = {
    display: "block"
  }

  // const responsive = {
  //   style: width < 740
  // }
  // @media (min-width: 768px) and (max-width: 991.98px) {
  //   display: "block"
  // }
  return (

    <div className="container-fluid " >
      <div className="text-center fs-1">All - Booking</div>
      {booking.map(book => {
        return (<div className="row custom-class text-center mb-2 border border-primary">
          <div className="col">
        Booking ID:{book.bookingId}
        </div>
        <div className="col">
        NAME: {book.name}
        </div>
        <div className="col">
        Lastname: {book.lastName}
        </div>
        <div className="col">
        Email: {book.email}
        </div>
        <div className="col">
        phoneNumber: {book.phoneNumber}
        </div>
        <div className="col">
        Date: {book.appointDate}
        </div>

        


        </div>)
      })}


    </div>
    
  )
}

export default Allbooking