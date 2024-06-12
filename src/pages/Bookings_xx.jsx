import { useEffect } from 'react';
import { getBookings } from '../services/apiBookings'

const Bookings_xx = () => {
  useEffect(()=>{
    getBookings(1).then((data) => console.log('booking(1) data', data ))
  })

  return <>Bookings_xx page</>;
};

export default Bookings_xx;
