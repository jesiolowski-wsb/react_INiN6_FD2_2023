import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20, costam: { asdasd: 333, djkd: 44 } },
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
    <>
      <button className="btn btn-small btn-primary m-2" onClick={handleReset}>
        reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          counter={counter}
        >
          <h4>Counter no: {counter.id}</h4>
        </Counter>
      ))}
    </>
  );
}

export default Counters;
