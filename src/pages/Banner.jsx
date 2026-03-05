import React from 'react'
import vector from "../assets/vector1.png";
export default function Banner({ inProgressTicket, totalResolve }) {
  // console.log(inProgressTicket)
  return (
    <div className="lg:mx-12 mx-auto flex flex-col lg:flex-row gap-6 py-6 text-white">
      <div
        className="relative flex-1 rounded-xl overflow-hidden 
                      bg-gradient-to-br from-[#5B3FD3] via-[#6D4EDB] to-[#8B5CF6] 
                      p-24 flex flex-col items-center justify-center"
      >
        <img
          src={vector}
          alt=""
          className="absolute top-0 -right-5 w-96 -scale-x-90"
        />
        <img src={vector} alt="" className="absolute top-0 left-0 w-96" />

        <div className="text-3xl">In-Progress</div>
        <span className="text-5xl font-bold">{inProgressTicket.length}</span>
      </div>
      <div
        className="relative flex-1 rounded-xl
                      bg-gradient-to-br from-[#22C55E] via-[#10B981] to-[#0D9488] 
                      p-24 flex flex-col items-center justify-center"
      >
        <img
          src={vector}
          alt=""
          className="absolute top-0 -right-5 w-96 -scale-x-90"
        />
        <img src={vector} alt="" className="absolute top-0 left-0 w-96" />

        <div className="text-3xl">Resolved</div>
        <span className="text-5xl font-bold">{totalResolve.length}</span>
      </div>
    </div>
  );
}
