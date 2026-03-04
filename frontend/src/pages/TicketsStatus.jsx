import React from "react";

export default function TicketsStatus({
  inProgressTicket,
  setInProgressTicket,
  totalResolve,
  setTotalResolve,
}) {
  //   console.log(inProgressTicket);
  const totalResolved = (name) => {
   //  console.log(name);
      const newProgress = inProgressTicket.find((title) => title === name);
      console.log(newProgress)
   // setInProgressTicket(newProgress);
  //  setTotalResolve((prev) => [...prev, name]);
  };
  return (
    <div className="md:basis-1/4">
      <h1 className="text-2xl">TicketsStatus</h1>
      <p className="pt-2">Select a ticket to add to Task Status</p>
      <div className="py-7">
        {inProgressTicket.map((data) => (
          <div key={data} className="card shadow-sm">
            <div className="card-body">
              <h1 className="text-xl">{data}</h1>
              <div className="">
                <button
                  onClick={() => totalResolved(data)}
                  className="btn btn-success btn-block"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl">Resolved Task</h1>
      {totalResolve.map((data) => (
        <div key={data} className="alert alert-success my-2">
          <p>{data}</p>
        </div>
      ))}
      <p className="pt-2">No resolved tasks yet.</p>
    </div>
  );
}
