import React, { useEffect, useState } from "react";
import { localhost } from "../../helpers/helpers";

const optionsArr = [
  { value: 5, title: "5s" },
  { value: 10, title: "10s" },
  { value: 30, title: "30s" },
  { value: 60, title: "1min" },
];

const IntervalSelect = () => {
  const [intervalTime, setIntervalTime] = useState(optionsArr[0].value);

  const changeInterval = () => {
    localhost.emit("changeInterval", intervalTime * 1000);
  };

  useEffect(() => {
    changeInterval();
  }, [intervalTime]);

  return (
    <>
      <select
        className="mt-5 p-3 rounded-lg"
        onChange={(e) => setIntervalTime(e.target.value)}
        name="select"
      >
        {optionsArr.map((option) => (
          <option key={option.value} value={option.value}>{option.title}</option>
        ))}
      </select>
      <h3 className="mt-4">The interval of the next fetch is: {intervalTime}s</h3>
    </>
  );
};

export default IntervalSelect;
