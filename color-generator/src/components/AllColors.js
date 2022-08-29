import React, { useState, useEffect } from "react";
import Color from "./Color";
import Values from "values.js";
import "./colors.css";

function AllColors() {
  const [color, setColor] = useState("#23878a");
  const [shades, setShades] = useState([]);

  // We are initilaizing the shades with sample color
  useEffect(() => {
    const initial_color = "#23878a";
    const initial_shades = new Values(initial_color).all(10);
    setShades(initial_shades);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setShades(new Values(color).all(10));
    } catch (e) {}
  };
  return (
    <div>
      <h3>Color Generator</h3>
      <div className="generator">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              id="color"
              placeholder="Enter color"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button type="submit" className="btn">
              Generate !
            </button>
          </form>
        </div>
        {/* source code details */}
        <div className="details">
          <h4>
            Written by{" "}
            <a className="name" href="https://sarathchandra.me/">
              Sarath
            </a>
          </h4>
          <a
            className="code"
            href="https://github.com/screddy1313/React-projects"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="allcolors">
        {shades.map((shade, index) => {
          return <Color key={index} clr={shade} index={index} />;
        })}
      </div>
    </div>
  );
}

export default AllColors;
