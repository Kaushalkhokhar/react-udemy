import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { uiActions } from "./store/index";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, getCartData } from './store/fetchCart'


// To not allowing sending data to firebase on first load
let firstLoad = true;

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    ////////////////////////////
    // This is with thunk...
    // console.log(cart.isFetch);
    
    if (firstLoad) {
      firstLoad = false;
      dispatch(getCartData());
      return
    }
    
    if (!cart.isFetch){
      return
    }
    dispatch(sendCartData(cart))


    ///////////////////////////////
    // This is for without thunk...

    // const sendCart = async () => {
    //   dispatch(
    //     uiActions.addNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data...",
    //     })
    //   );

    //   const response = await fetch(
    //     "https://react-http-9da4e-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT", // Override the exiting database on the given node
    //       body: JSON.stringify(cart),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Cartdata was not sent..!");
    //   }

    //   dispatch(
    //     uiActions.addNotification({
    //       status: "success",
    //       title: "Success...",
    //       message: "Cart data sent successfully..",
    //     })
    //   );
    // };

    // if (firstLoad) {
    //   firstLoad = false;
    //   return;
    // }

    // sendCart().catch((error) => {
    //   dispatch(
    //     uiActions.addNotification({
    //       status: "error",
    //       title: "Error...",
    //       message: "Sending cart data failed",
    //     })
    //   );
    // });
  }, [cart, dispatch]); // Here dispatch garanties to not change. so not causing infinite looping

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
