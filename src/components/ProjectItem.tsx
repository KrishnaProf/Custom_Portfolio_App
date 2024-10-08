const ProjectItem = ({
  img,
  title,
  GitHublink,
  Applink,
}: {
  img: string;
  title: string;
  GitHublink: string;
  Applink: string;
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover: bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 h-48 "
      />
      <div className=" hidden group-hover:block absolute top-[-35%] left-[20%] translate-x-[20%] translate-y-[50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center pt-2">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>
        <div className="flex items-center gap-4">
          <a href={GitHublink}>
            <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer ">
              GitHub link
            </p>
          </a>
          <a href={Applink}>
            <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer ">
              Application
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
