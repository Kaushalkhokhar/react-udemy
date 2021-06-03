import { useState, useEffect } from 'react';

// 'use' is compulsory in custon hooks
const useCounter = (forward=true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(forward) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return counter;
};

export default useCounter;
