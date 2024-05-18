// Skills Section

function Skills(props) {
  return (
    // -----------Skills Divs--------------------
    <div className="flex flex-col justify-center items-center gap-7 pt-10 bg-[#31333B] pb-32">
      <div className="font-bold text-2xl sm:text-3xl">My Skills</div>
      <div className="flex flex-row flex-wrap gap-3 justify-center items-center sm:w-3/4 w-11/12">
        {languages.map((item, index) => {
          return <Skill logo={item.logo} name={item.name} />;
        })}
      </div>
    </div>
  );
}

// ----------------------Individual Skill Box--------------
function Skill(props) {
  return (
    <div className="w-36 h-36 sm:h-40 sm:w-40 bg-[#3D3E42] rounded-xl flex flex-col justify-center items-center gap-3 hover:bg-[#F0BF6C]">
      <img src={props.logo} alt="" className="w-1/5 h-1/6" />
      <p>{props.name}</p>
    </div>
  );
}

// Languages Learnt
const languages = [
  {
    logo: "./images/html.svg",
    name: "HTML",
  },
  {
    logo: "./images/css.svg",
    name: "CSS",
  },
  {
    logo: "./images/javascript.svg",
    name: "Javascript",
  },
  {
    logo: "./images/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    logo: "./images/tailwind.svg",
    name: "Tailwind",
  },
  {
    logo: "./images/jQuery.svg",
    name: "jQuery",
  },
  {
    logo: "./images/react.svg",
    name: "React",
  },
  {
    logo: "./images/node.svg",
    name: "Node.js",
  },
  {
    logo: "./images/Ejs.svg",
    name: "Ejs",
  },
  {
    logo: "./images/postgressql.svg",
    name: "PostgresSql",
  },
];

export default Skills;
