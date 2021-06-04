import { useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = async (data) => {
    try {
      const response = await fetch(
        "https://react-http-9da4e-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong. Please order again");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return {
    error,
    sendRequest,
  };
};

export default useHttp;
