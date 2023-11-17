import React, { useState, useRef } from "react";

const TooltipWrapper = ({ title, children, element }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="tooltip-container relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      ref={tooltipRef}
    >
      {children}
      {/* element is not parent text is given */}
      {/* {isTooltipVisible && (
        <div className="tooltip absolute top-0">{title}</div>
      )} */}
      {/* element is  parent button is passed */}
      {isTooltipVisible && element}
    </div>
  );
};

export default TooltipWrapper;
