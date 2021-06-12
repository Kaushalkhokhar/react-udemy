import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* Link is used for preventing a defaults and 
            not sending a request to load page again */}
            {/* NavLink is used to give specify active link
            and also allowes us to specify class on active-link 
            by activeClassName */}
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/product">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
