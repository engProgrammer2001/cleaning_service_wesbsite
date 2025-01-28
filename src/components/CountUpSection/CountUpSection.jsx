import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Import icons from react-icons
import { PiUsersFourFill } from "react-icons/pi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { RiRepeatLine } from "react-icons/ri"; // New icon for Repeated Projects

const CountUpSection = () => {
  // Define icon mapping
  const icons = {
    "Our Happy Clients": (
      <PiUsersFourFill className="text-7xl text-slate-800" />
    ),
    "Completed Projects": (
      <FaProjectDiagram className="text-7xl text-slate-800" />
    ),
    // New icon
    "Repeated Projects": <RiRepeatLine className="text-7xl text-slate-800" />,
    "Branches In India": <MdLocationCity className="text-7xl text-slate-800" />,
    "Total Staff": <IoPeopleCircleSharp className="text-7xl text-slate-800" />,
  };

  return (
    <div className="bg-gradient-to-tr from-[#ac00b7] to-blue-100 p-8 my-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <CountUpCard
          icon={icons["Our Happy Clients"]}
          end={321}
          label="Our Happy Clients"
        />
        <CountUpCard
          icon={icons["Completed Projects"]}
          end={390}
          label="Completed Projects"
        />
        <CountUpCard
          icon={icons["Repeated Projects"]}
          end={350}
          label="Repeated Projects"
        />
        <CountUpCard
          icon={icons["Branches In India"]}
          end={3}
          label="Branches In India"
        />
        <CountUpCard icon={icons["Total Staff"]} end={16} label="Total Staff" />
      </div>
    </div>
  );
};

const CountUpCard = ({ icon, end, label, suffix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div> {/* Render icon dynamically */}
      {inView && (
        <h2 className="text-5xl font-bold text-primary text-slate-800">
          <CountUp end={end} duration={2} suffix={suffix} />+
        </h2>
      )}
      <p className="text-muted-foreground text-slate-800 font-bold text-2xl mt-2">
        {label}
      </p>
    </div>
  );
};

export default CountUpSection;
