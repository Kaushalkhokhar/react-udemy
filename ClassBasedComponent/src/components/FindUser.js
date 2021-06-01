import { useEffect, useState, useRef } from 'react';
import classes from './FindUser.module.css';

const FindUser = (props) => {
    // const [searchInput, setSearchInput] = useState('')
    const inputRef = useRef();

    const searchInputHandler = (event) => {
        // setSearchInput(event.target.value)
        // console.log(searchInput);
        props.onChange(inputRef.current.value);
    }
    
    // useEffect(() => {
    //     props.onChange(searchInput)
    // },[searchInput])

  return (
    <form className={classes.users}>
      <input type="search" ref={inputRef} onChange={searchInputHandler}></input>
    </form>
  );
};

export default FindUser;
