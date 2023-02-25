import React from 'react'

const SoonTicker = ({soonticker}) => {
  return (
    <div className="ticker flex flex-col items-center mb-7 opacity-40">
    <div className="p-3 rounded-lg bg-indigo-300 text-white h-24 w-48 grid items-center">
      <p className="font-bold text-lg uppercase text-center">{soonticker}</p>
    </div>
  </div>
  )
}

export default SoonTicker