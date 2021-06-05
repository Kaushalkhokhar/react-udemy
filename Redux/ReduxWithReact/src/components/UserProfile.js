import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const authStatus = useSelector(state => state.auth.isAuth) 
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
