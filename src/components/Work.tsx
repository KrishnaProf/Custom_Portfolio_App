import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    title: "Software Engineer",
    company: "DELL Technologies",
    duration: "3 years",
    description: "Worked as a software engineer at DELL Technologies",
  },

  {
    year: 2019,
    title: "Software Engineer",
    company: "Infosys BPM PVT LTD",
    duration: "2 years",
    description: "Worked as a software engineer at Infosys BPM PVT LTD",
  },

  {
    year: 2016,
    title: "Software Engineer",
    company: "Intertec Software PVT LTD",
    duration: "2 years",
    description: "Worked as a software engineer at Intertec Software PVT LTD",
  },
];

const work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default work;
