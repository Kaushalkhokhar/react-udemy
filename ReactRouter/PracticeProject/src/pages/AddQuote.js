import { useState, useEffect } from "react";
import { Prompt, useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

// const quotesInitialState = [];

// const quotesReducer = (state, action) => {
//   return quotesInitialState
// }

// const firstLoad = true

const AddQuote = () => {
  // const [quotes, quotesDispatch] = useReducer(quotesReducer, quotesInitialState)
  const [quotes, setQuotes] = useState([]);
  const history = useHistory(); // Allows to change a history of visited pages

  const addQuoteHandler = (quote) => {
    setQuotes((prevState) => {
      return prevState.push(quote);
    });

    const sendQuote = async () => {
      const response = await fetch(
        "https://react-http-9da4e-default-rtdb.firebaseio.com/quotes.json",
        {
          method: "PUT",
          body: JSON.stringify(quotes),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data is failed");
      }
    };

    try {
      sendQuote();
      history.push("/quotes"); // Path to be navigated when qoute is added
    } catch (err) {
      <Prompt when={err} message={(location) => "Some error"} />;
    }
  };

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(
        "https://react-http-9da4e-default-rtdb.firebaseio.com/quotes.json"
      );

      if (!response.ok) {
        throw new Error("Sending data is failed");
      }
      const data = await response.json()
      let transformedData = [];
      for (const key in data) {
        transformedData.push(data[key]);
      }
      setQuotes(transformedData);
    };

    try {
      getQuote();
      
    } catch (err) {
      <Prompt when={err} message={(location) => "Some error"} />;
    }
  }, []);

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
