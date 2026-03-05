import React from "react";
import { toast } from "react-toastify";

export default function TicketsStatus({
  inProgressTicket,
  totalResolve,
  setTotalResolve,
}) {
  //   console.log(inProgressTicket);
  // console.log(totalResolve);
  const totalResolved = (index, data) => {
    // console.log(index);
    // console.log(data)
    inProgressTicket.splice(index, 1);
    //   console.log(inProgressTicket)
    setTotalResolve([...totalResolve, data]);
    toast.success("Thank you resolve Tickets Status.");
  };
  return (
    <div className="md:basis-1/4">
      <h1 className="text-2xl">TicketsStatus</h1>
      {inProgressTicket.length === 0 && (
        <p className="pt-2">Select a ticket to add to Task Status</p>
      )}
      <div className="py-7">
        {inProgressTicket.map((data, index) => (
          <div key={index} className="card shadow-sm">
            <div className="card-body">
              <h1 className="text-xl">{data}</h1>
              <div className="">
                <button
                  onClick={() => totalResolved(index, data)}
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
      {totalResolve.map((data, index) => (
        <div key={index} className="alert alert-success my-2">
          <p>{data}</p>
        </div>
      ))}
      {totalResolve.length === 0 && (
        <p className="pt-2">No resolved tasks yet.</p>
      )}
    </div>
  );
}
