import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "../components/Form/Form";
import IntervalSelect from "../components/IntervalSelect/IntervalSelect";
import TickerList from "../components/TickerList/TickerList";
import { localhost } from "../helpers/helpers";
import { loadInitialDataSocket } from "../store/actions/tickerActions";

const Home = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    localhost.emit("start");
    dispatch(loadInitialDataSocket(localhost));
  }, []);
  
  return (
    <div className="flex flex-col items-center px-2 py-4">
      <TickerList />
      <Form />
      <IntervalSelect />
    </div>
  );
};

export default Home;
