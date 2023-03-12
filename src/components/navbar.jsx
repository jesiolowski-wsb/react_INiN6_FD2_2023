import React from "react";

function Navbar({ totalCounters }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span>
        Navbar <span className="badge badge-info m-2">{totalCounters}</span>{" "}
      </span>
    </nav>
  );
}

export default Navbar;
