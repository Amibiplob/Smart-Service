import React, { Suspense } from "react";
import AllTickets from "./AllTickets";
import TicketsStatus from "./TicketsStatus";

export default function Tickets({
  inProgressTicket,
  setInProgressTicket,
  totalResolve,
  setTotalResolve,
}) {
  const fetchData = fetch("/fakeDB.json").then((res) => res.json());
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row lg:mx-12 gap-5">
        <Suspense fallback={<p>⌛Downloading...</p>}>
          <AllTickets
            fetchData={fetchData}
            inProgressTicket={inProgressTicket}
            setInProgressTicket={setInProgressTicket}
          />
        </Suspense>
        <TicketsStatus
          inProgressTicket={inProgressTicket}
          setInProgressTicket={setInProgressTicket}
          totalResolve={totalResolve}
          setTotalResolve={setTotalResolve}
        />
      </div>
    </div>
  );
}
