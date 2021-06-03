import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        // *GET, POST, PUT, DELETE, etc.
        headers: requestConfig.headers ? requestConfig.headers : {},
        //'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        // body data type must match "Content-Type" header
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  
  return {
    // isLoading: isLoading,
    // error: error,
    // sendRequest: sendRequest,
    // Sort form of above syntex
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
