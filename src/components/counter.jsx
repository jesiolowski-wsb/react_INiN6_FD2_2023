import React from "react";

const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => {
  const formatCount = () =>
    counter.value === 0 ? <span>zero</span> : counter.value;

  let classes = "badge m-2 badge-";
  classes += counter.value === 0 ? "warning" : "primary";

  return (
    <div className="row">
      <div className="col-1">
        <span className={classes}>{formatCount()}</span>
      </div>
      <div className="col-4">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-sm btn-danger"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
