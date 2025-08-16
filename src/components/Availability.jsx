import React, { useState, useEffect } from 'react';
import './Availability.scss';

const Availability = () => {
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    setCurrentMonth(monthNames[date.getMonth()]);
  }, []);

  return (
    <div className="availability-container">
      <p className="availability-text">
        <span className="green-dot"></span> Available {currentMonth}
      </p>
      <a href="https://cal.com/priyanshu-samal" target="_blank" rel="noopener noreferrer" className="connect-button">
        Connect with me
      </a>
    </div>
  );
};

export default Availability;
