import React from "react";
import { useSelector } from "react-redux";
import { handleRemoveTicker } from "../../helpers/helpers";
import SoonTicker from "../SoonTicker/SoonTicker";
import Ticker from "../Ticker/Ticker";

const TickerList = () => {
  const { tickers, soonTickers, loading, error } = useSelector(
    (state) => state
  );

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {loading && <h3>Loading...</h3> }
      {error && <h3>Something went wrong!</h3> }
      {!tickers.length && !soonTickers.length ? <p>No Tickers</p> : null}
      {tickers?.map((ticker) => (
        <Ticker
          key={ticker.ticker}
          {...ticker}
          handleRemoveTicker={handleRemoveTicker}
        />
      ))}
      {soonTickers?.map((soonticker) => (
        <SoonTicker key={soonticker} soonticker={soonticker}/>
      ))}
    </div>
  );
};

export default TickerList;
