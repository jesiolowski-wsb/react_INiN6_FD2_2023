import React, { useState } from "react";

const Counter = ({ counter, onDelete }) => {
  const [value, setValue] = useState(counter.value);
  const formatCount = () => (value === 0 ? <span>zero</span> : value);

  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>
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
