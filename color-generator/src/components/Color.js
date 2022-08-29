import React, { useEffect, useState } from "react";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function Color(props) {
  const { rgb, weight } = props.clr;
  const index = props.index; // this is to change the class for text

  const hex = rgbToHex(rgb);
  const [showCopy, setShowCopy] = useState(false);

  // this is used to automatically hide the clipboard message
  useEffect(() => {
    setTimeout(() => {
      setShowCopy(false);
    }, 1000);
  }, [showCopy]);
  return (
    <div
      //   className="single-color"
      className={`single-color ${index > 10 && "color-light"} `}
      style={{ backgroundColor: hex }}
      onClick={() => {
        navigator.clipboard.writeText(hex);
        setShowCopy(!showCopy);
      }}
    >
      <p>{hex}</p>
      <p>{weight}%</p>
      <span style={{ color: "#ffdf00" }}>
        {showCopy ? "Copied to clipboard!" : ""}
      </span>
    </div>
  );
}

export default Color;
