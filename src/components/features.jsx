import React from "react";

export const Features = ({ data }) => {
  return (
    <div id="features" className="text-center overflow-hidden bg-black py-4">
        <h2>Technologies We Use</h2>
      <div className="marquee">
        <div className="marquee-content">
          {data
            ? [...data, ...data].map((d, i) => (
                <img
                  key={`${d.title}-${i}`}
                  src={`/img/technologies/${d.icon}`}
                  alt={d.title}
                  className="feature-img"
                  
                />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
