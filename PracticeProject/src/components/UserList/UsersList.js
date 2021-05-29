import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.uName} is of {user.uAge} years of old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
