import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const services = [
    'Haircut',
    'Hair Coloring',
    'Deep Conditioning',
    "Bridal Styling",
    'Event Styling'
];

const stylists = [
    'Luna Sparkle',
    'Oliver Twist',
    'Aurora Glow',
    'Evelyn Breeze'
]

const Booking = () => {

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [service,setService] = useState();
    const [stylist, setStylist] = useState();
    const [date,setDate] = useState();

    const handleSubmit = () => {

    }

  return (
    <div>
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input 
                type="text" 
                id='name' 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
                required 
                />
            <label htmlFor="">Phone Number:</label>
            <input 
                type="number"
                id='phoneNumber' 
                value={phoneNumber}
                onChange={(e)=> setPhoneNumber(e.target.value)} 
                required/>
            <label htmlFor="">Email:</label>
            <input 
                type="email"
                id='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            <label htmlFor="date">Date:</label>

            <Calendar 
                onChange={setDate}
                value={date}
                />

            <div>Selected Date:</div>

            <label htmlFor="service">Service:</label>
            <select 
                id="service"
                value={service}
                onChange={(e)=> setService(e.target.value)}
                required
                >
                    <option value='' disabled>Select a service</option>
                    {services.map((service, index)=> (
                        <option key={index} value={service}>{service}</option>
                    ))}
            </select>
            <label htmlFor="stylist">Stylist:</label>
            <select 
                id="stylist"
                value={stylist}
                onChange={(e)=> setStylist(e.target.value)}
                required
                >
                    <option value='' disabled>Select a stylist</option>
                    {stylists.map((stylist, index)=> (
                        <option key={index} value={stylist}>{stylist}</option>
                    ))}
            </select>
            <button type='submit'>Book</button>
        </form>
    </div>
  )
}

export default Booking;