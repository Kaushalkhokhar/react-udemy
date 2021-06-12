import { Fragment } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Fragment>
      <h2>This is product page</h2>
      <ul>
        <li>
          <Link to={"/product/p1"}>A Book</Link>
        </li>
        <li>
          <Link to={"/product/p2"}>A Mobile</Link>
        </li>
        <li>
          <Link to={"/product/p3"}>An Online Cource</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Product;
