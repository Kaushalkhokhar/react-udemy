import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  // when we call a custcom hook the state 
  // and hooks set in custom hook tied with
  // current componet funciton here it is ForwardCounter 
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
