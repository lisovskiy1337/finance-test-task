import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleAddTicker } from "../../helpers/helpers";
import { addTicker } from "../../store/actions/tickerActions";


const Form = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);

  const handlePostTicker = (e) => {
    e.preventDefault();
    if (!input || input.length > 6) {
      setInput("");
      setError(true);
      let timer = setTimeout(() => {
        setError(false);
      }, 750);
      return () => clearTimeout(timer);
    } else {
      if ( tickers.some((ticker) => ticker.ticker.toLowerCase().includes(input.toLowerCase()))) {
        toast.error("Already in list", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setInput("");
      } else {
        handleAddTicker(input);
        dispatch(addTicker(input));
        toast.success("Your Ticker Will Appear On The Next Fetch !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setInput("");
      }
    }
  };

  const onInputChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setInput(value);
    }
  };
  return (
    <form className="w-full flex items-center justify-center mt-4">
      <input
        className={`px-4 py-2 w-full sm:w-80 focus:outline-none border transition-colors duration-200 focus:border-cyan-200 ${error ? 'border-red-500' : 'border-transparent'}`}
        type="text"
        placeholder="Type Ticker..."
        value={input}
        onChange={onInputChange}
        data-testid='test-input'
      />
      <button
        type="submit"
        onClick={handlePostTicker}
        className="p-2 w-32 bg-cyan-200 border border-transparent text-sm leading-6 transition-colors duration-200 hover:bg-cyan-300 hover:border-cyan-500"
      >
        Add Ticker
      </button>
      <ToastContainer autoClose={1500} />
    </form>
  );
};

export default Form;
