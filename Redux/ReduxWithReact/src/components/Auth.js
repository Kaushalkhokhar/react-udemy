import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/index";
import UserProfile from "./UserProfile";

const Auth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuth);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.loggin());
  };
  console.log(isLoggedIn);

  const logginForm = (
    <section>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </section>
  );

  return (
    <main className={classes.auth}>
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && logginForm}
    </main>
  );
};

export default Auth;
