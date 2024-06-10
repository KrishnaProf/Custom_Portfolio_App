import React from "react";
import ProjectItem from "./ProjectItem";
import Property from "../assets/Property.jpg";
import Crypto from "../assets/Crypto.jpg";
import Netflix from "../assets/Netflix.jpg";
import Twitch from "../assets/Twitch.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam
        iste repellat consequatur libero reiciendis, blanditiis accusantium.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={Crypto} title="Crypto App" />
        <ProjectItem img={Property} title="Property App" />
        <ProjectItem img={Netflix} title="Netflix App" />
        <ProjectItem img={Twitch} title="Twitch App" />
      </div>
    </div>
  );
};

export default Projects;
