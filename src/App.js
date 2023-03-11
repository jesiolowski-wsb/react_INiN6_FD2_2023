import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 87 },
  ]);

  const handleDelete = (id) => {
    setCounters(counters.filter((c) => c.id !== id));
  };

  const handleIncrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value++;
    setCounters(countersUpdated);
  };

  const handleReset = () => {
    const countersReset = counters.map((c) => {
      c.value = 0;
      return c;
    });

    setCounters(countersReset);
  };

  return (
    <div className="App">
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container" role="main">
        <Counters
          counters={counters}
          handleDelete={handleDelete}
          handleIncrement={handleIncrement}
          handleReset={handleReset}
        />
      </main>
    </div>
  );
}

export default App;
