import React, { useState, useEffect } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <header>
        <h1 className='text-white'>Use State</h1>
      </header>
      <div className='main'>
        <h1 className='text-center'>The Use Effect rendered {count} times!</h1>
      </div>
    </div>
  );
};

export default Home;
