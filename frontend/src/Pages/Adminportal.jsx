import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPortal = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('/api/reservations'); // Assuming your backend route for fetching reservations is '/api/reservations'
      console.log(response);
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  return (
    <div>
      <h1>Reservation Records</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.firstName}</td>
              <td>{reservation.lastName}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.email}</td>
              <td>{reservation.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPortal;
