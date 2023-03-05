import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
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

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.id} onDelete={handleDelete} counter={counter}>
          <h4>Counter no: {counter.id}</h4>
        </Counter>
      ))}
    </>
  );
}

export default Counters;
