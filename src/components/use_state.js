import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <header>
        <h1 className='text-white'>Use State</h1>
      </header>
      <div className='main'>
        <h1 className='text-center'>Counter: {count}</h1>
        <div className='text-center'>
          <button className='btn btn-red' onClick={handleDecrement}>-</button>
          <button className='btn btn-green' onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default State;
