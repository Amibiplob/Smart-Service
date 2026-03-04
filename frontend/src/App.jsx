import { useState } from "react";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Tickets from "./pages/Tickets";

function App() {
  const [inProgressTicket, setInProgressTicket] = useState([]);
  const [totalResolve, setTotalResolve] = useState([]);
  return (
    <div className="">
      <Navbar />
      <Banner inProgressTicket={inProgressTicket} totalResolve={totalResolve} />
      <Tickets
        setInProgressTicket={setInProgressTicket}
        inProgressTicket={inProgressTicket}
        totalResolve={totalResolve}
        setTotalResolve={setTotalResolve}
      />
      <Footer />
    </div>
  );
}

export default App;
