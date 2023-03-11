import React from "react";

const Counter = ({ counter, onDelete, onIncrement }) => {
  const formatCount = () =>
    counter.value === 0 ? <span>zero</span> : counter.value;

  let classes = "badge m-2 badge-";
  classes += counter.value === 0 ? "warning" : "primary";

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onIncrement(counter)}
      >
        +
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-sm btn-danger m-2"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
