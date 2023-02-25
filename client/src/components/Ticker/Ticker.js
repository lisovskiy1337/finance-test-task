import React from "react";
import { useDispatch } from "react-redux";
import { deleteTicker } from "../../store/actions/tickerActions";

const Ticker = ({
  ticker,
  price,
  change,
  change_percent,
  dividend,
  handleRemoveTicker,
}) => {
  
  const dispatch = useDispatch();
  const handleClick = async (ticker) => {
    await handleRemoveTicker(ticker);
    dispatch(deleteTicker(ticker));
  };

  return (
    <div className="ticker flex flex-col items-center">
      <div className="p-3 rounded-lg bg-indigo-300 text-white h-24 w-48 flex items-center transition-all duration-200 hover:bg-indigo-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={512}
          height={512}
          viewBox="0 0 292.362 292.362"
          className={`w-6 h-6 mr-2 transition-all duration-150 ${
            change_percent > 0 ? "fill-green-300 rotate-180" : "fill-red-500 rotate-0"
          }`}
          xmlSpace="preserve"
        >
          <path
            d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
            data-original="#000000"
          />
        </svg>
        <div className="flex-col w-full">
          <div className="flex justify-between gap-2">
            <p className="font-bold text-lg uppercase">{ticker}</p>
            <span
              className={`transition-all duration-500 ${
                change_percent > 0 ? "text-green-200" : "text-red-500"
              } `}
            >
              {change_percent}%
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span>{price}$</span>
            <span>{change}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleClick(ticker)}
        className="btn opacity-0 bg-rose-400 w-[60%] p-1 text-sm text-white transition-all duration-300 delay-200 hover:bg-red-500"
      >
        delete
      </button>
    </div>
  );
};

export default Ticker;
