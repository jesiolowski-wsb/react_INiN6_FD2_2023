import React from "react";
import Counter from "./counter";

function Counters({ counters, handleDelete, handleIncrement, handleReset }) {
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
