import React, { use, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { toast } from "react-toastify";
export default function AllTickets({
  fetchData,
  inProgressTicket,
  setInProgressTicket,
}) {
  const data = use(fetchData);
  const [tickets, setTickets] = useState([...data]);

  const addTicket = (ticket) => {
    setInProgressTicket([...inProgressTicket, ticket.title]);
    setTickets(tickets.filter((obj) => obj.id !== ticket.id));
    toast.success("Thank you for adding Ticket Status.");
  };
  return (
    <div className="md:basis-3/4">
      <h1 className="text-2xl">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
        {tickets.map((ticket) => (
          <div
            onClick={() => addTicket(ticket)}
            key={ticket.id}
            className="bg-base-200 cursor-pointer p-6 rounded-xl shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{ticket.title}</h2>
              <span className="badge badge-success badge-lg gap-2 px-4 py-3 text-base">
                <span className="w-3 h-3 bg-success rounded-full"></span>
                {ticket.status}
              </span>
            </div>
            <p className="mt-2">{ticket.description}</p>

            <div className="flex justify-between mt-3">
              <div className="flex gap-2">
                <p className="">{ticket.id}</p>
                <h1 className="badge badge-error badge-outline font-semibold">
                  {ticket.priority}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1>{ticket.customer}</h1>
                <MdDateRange />
                <span>{ticket.createdAt}</span>
              </div>
            </div>
          </div>
        ))}
        {tickets.length === 0 && (
          <p className="pt-2">No More Tickets.</p>
        )}
      </div>
    </div>
  );
}
