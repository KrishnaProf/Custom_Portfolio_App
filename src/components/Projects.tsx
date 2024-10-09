import ProjectItem from "./ProjectItem";
import FarmTube from "../assets/FarmTube.jpg";
import Spotify from "../assets/Spotify.png";
import Todopic from "../assets/Todopic.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p>
        These projects showcase our expertise in building responsive and dynamic
        web applications using modern technologies like React, Tailwind CSS, and
        TypeScript. ======= Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Id odit ullam iste repellat consequatur libero reiciendis,
        blanditiis accusantium. Restart
      </p>
      <br />
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={Spotify}
          title="Spotify App"
          GitHublink="https://github.com/KrishnaProf/Spotify_Clone"
          Applink="https://spotify-2z12.onrender.com/"
        />
        <ProjectItem
          img="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Best Eats App"
          GitHublink="https://github.com/KrishnaProf/Best_eat"
          Applink=""
        />
        <ProjectItem
          img={FarmTube}
          title="FarmTube App"
          GitHublink="https://github.com/KrishnaProf/FarmTube"
          Applink=""
        />
        <ProjectItem
          img={Todopic}
          title="Todo App"
          GitHublink="https://github.com/KrishnaProf/To_Do_List_App"
          Applink="https://to-do-list-app-g0s6.onrender.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
