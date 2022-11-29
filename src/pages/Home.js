import Button from "components/Button";
import React from "react";

import "./Home.css";

const Home = () => {
  const renderShowcase = () => {
    return (
      <section className="bg-image absolute top-0 left-0 right-0 bottom-0 z-40">
        <div className="flex flex-col justify-center mt-56 md:mt-80 container mx-auto">
          <h1 className="text-4xl md:text-6xl text-white text-center md:text-left font-extrabold uppercase leading-relaxed p-10 md:p-0">
            Delicious Food <br /> for any Event
          </h1>
          <p className="text-white md:mt-10 leading-relaxed text-center md:text-justify md:p-0">
            Cras eu elit congue, placerat dui ut, tincidunt nislnulla leo elit,
            <br />
            pharetra bibendum justo quiscursus consectetur erat.
          </p>
          <div className="flex items-center md:mt-20 p-10 md:p-0 text-center">
            <Button text="Get Started" icon />
            <div className="mr-8"></div>
            <Button text="Learn More" light icon />
          </div>
        </div>
      </section>
    );
  };

  return <div>{renderShowcase()}</div>;
};

export default Home;
