import portfolio_bg from "../assets/portfolio_bg.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Krishna2 from "../assets/Krishna2.jpg";

export default function Main() {
  const DownloadResume = () => {
    // URL of the resume file
    const resumeUrl = "src/assets/Leela_Krishna_Front_End_Developer.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Leela_Krishna_Front_End_Developer.pdf";
    console.log(link);
    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="w-full h-screen text-center">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={portfolio_bg}
        alt="/"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 flex">
        <div className="max-w-[700px] ml-80 mt-10 h-full w-full flex flex-col justify-center lg: items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I am Leela Krishna
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 font-serif">
            I'm a&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://x.com/leela_krishna12">
              <FaTwitter className="cursor-pointer" />
            </a>
            <a href="https://github.com/KrishnaProf">
              <FaGithub className="cursor-pointer" />
            </a>
            <FaInstagram className="cursor-pointer" />
            <a href="https://www.linkedin.com/in/leela-krishna09/">
              <FaLinkedin className="cursor-pointer" />
            </a>
          </div>
          <button
            onClick={DownloadResume}
            className="bg-slate-600 text-white text-lg font-bold rounded-full m-10 p-4"
          >
            Download Resume
          </button>
        </div>
        <div className="mt-1 mr-60">
          <img
            className="rounded-full p-4 m-6 shadow-lg w-100"
            src={Krishna2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
