import React, { Suspense } from "react";
import AllTickets from "./AllTickets";
import TicketsStatus from "./TicketsStatus";

export default function Tickets() {
  const fetchData = fetch("/fakeDB.json").then((res) => res.json());
  return (
    <div>
      <div className="flex lg:mx-12">
        <Suspense fallback={<p>⌛Downloading...</p>}>
          <AllTickets fetchData={fetchData} />
        </Suspense>
        <TicketsStatus />
      </div>
    </div>
  );
}
