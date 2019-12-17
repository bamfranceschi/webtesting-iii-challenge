import React from "react";

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? "red-led" : "green-led"}`;
  const lockedClass = `led ${locked ? "red-led" : "green-led"}`;

  return (
    <div className="display panel" data-testid="display_panel">
      <div className={lockedClass} data-testid="locked_class">
        {locked ? "Locked" : "Unlocked"}
      </div>
      <div className={closedClass} data-testid="closed_class">
        {closed ? "Closed" : "Open"}
      </div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false
};

export default Display;
