import { cartActions, uiActions } from "./index";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.addNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-9da4e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", // Overrides the exiting database on the given node
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Cartdata was not sent..!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.addNotification({
          status: "success",
          title: "Success...",
          message: "Cart data sent successfully..",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.addNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.addNotification({
    //     status: "pending",
    //     title: "Fetching...",
    //     message: "Fetching cart data...",
    //   })
    // );

    const fetchCartData = async () => {
      const response = await fetch(
        "https://react-http-9da4e-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error(
          "Fetching a data is not completed.Please refresh the page"
        );
      }

      return response.json();
    };
    try {
      const data = await fetchCartData();
      dispatch(
        cartActions.copyItem({
          items: data.items || [], // This should be done for empty cart
          totalAmount: data.totalAmount,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.addNotification({
          status: "error",
          title: "Error",
          message: "Fetching a data is not completed.Please refresh the page",
        })
      );
    }
  };
};
