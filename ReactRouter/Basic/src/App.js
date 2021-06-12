import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        {/* Used when dynamic urls are used*/}
        <Switch>
          {/* exact is important in redirect */}
          <Route te path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* Here exact is used for exact matching of url */}
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path={"/product/:productID"}>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
