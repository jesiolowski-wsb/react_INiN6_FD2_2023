import React from "react";
import Counter from "./counter";

function Counters({
  counters,
  handleDelete,
  handleIncrement,
  handleReset,
  handleDecrement,
}) {
  return (
    <div className="container">
      <div className="row">
        <button className="btn btn-small btn-primary m-2" onClick={handleReset}>
          reset
        </button>
      </div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counter={counter}
        >
          <h4>Counter no: {counter.id}</h4>
        </Counter>
      ))}
    </div>
  );
}

export default Counters;
