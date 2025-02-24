import React, { useState, useEffect } from 'react';

const Units = () => {
  const [unit, setUnit] = useState(0);
  const [formattedUnit, setFormattedUnit] = useState(['0', '0', '0', '0']);

  useEffect(() => {
    const interval = setInterval(() => {
        
      setUnit((prevUnit) => (prevUnit + 1) % 10000);

    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const digits = String(unit).padStart(4, '0').split('');
    setFormattedUnit(digits);
  }, [unit]);

  return (
    <div className= "d-inline-flex" style={{ fontSize: '2rem' }}>
      {formattedUnit.map((digit, index) => (
        <p className='p-5 border border-dark border-2' key={index}>{digit}</p>
      ))}
    </div>
  );
};

export default Units;
