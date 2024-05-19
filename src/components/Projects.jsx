import { useState } from "react";
import { NavLink } from "react-router-dom";

// Projects Section
function Projects(props) {
  return (
    <div className="bg-[#31333B]" id="projects">
      <div className="text-center sm:text-4xl text-3xl pb-4 font-bold">
        Projects
      </div>
      {/* Projects Boxes */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-3 w-11/12 m-auto pb-20">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              name={project.name}
              description={project.description}
              github={project.github}
              server={project.server}
              logo={project.logo.map((logot, index) => (
                <img key={index} src={logot} alt="" className="h-8 w-10" />
              ))}
            />
          );
        })}
      </div>
    </div>
  );
}
// ----------Individual Project---------------
function Project(props) {
  const [hover, setHover] = useState(false);

  // Display project descriptions and link when mouse is on it
  function setMouseOver() {
    return setHover(true);
  }
  // Hide project descriptions and link when mouse out
  function setMouseOut() {
    return setHover(false);
  }
  return (
    <div
      // project picture as background image
      style={{
        backgroundImage: hover ? null : `url(${props.img})`,
        backgroundSize: "cover",
        backgroundColor: hover ? "#3D3D42" : `url(${props.img})`,
      }}
      className="h-52 w-72 rounded-md"
      onMouseOver={setMouseOver}
      onMouseOut={setMouseOut}
    >
      {/* Project descriptions and links */}
      <div
        className="flex flex-col justify-center items-center p-5 text-center w-5/6 m-auto gap-3 h-5/6"
        style={{ visibility: hover ? "visible" : "hidden" }}
      >
        <div className="text-base font-bold">{props.name}</div>
        <div className="text-xs">{props.description}</div>
        <div className="flex flex-row">{props.logo}</div>
        <div className="flex flex-row gap-2 text-sm">
          <NavLink to={props.server}>
            <button className="bg-[#F0BF6C] w-20 rounded-full">Server</button>{" "}
          </NavLink>
          <NavLink to={props.github}>
            <button className="bg-[#F0BF6C] w-20 rounded-full">Github</button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// -------------Projects contents-----------------
const projects = [
  {
    img: "./images/cryptland.png",
    name: "Cryptland",
    logo: ["./images/react.svg", "./images/tailwind.svg"],
    description: "The Finance Solutions For Your Business",
    github: "https://github.com/Abdulmajid48/cryptland",
    server: "https://cryptland.vercel.app/",
  },
  {
    img: "./images/stract.jpg",
    name: "Stract",
    logo: ["./images/react.svg", "./images/tailwind.svg"],
    description: "A Data Analysis Software For Your Business",
    github: "https://github.com/Abdulmajid48/stract",
    server: "https://stract.vercel.app/",
  },
  {
    img: "./images/tripace.png",
    name: "Tripace",
    logo: ["./images/bootstrap.svg", "./images/react.svg"],
    description:
      " A 17 pages Flight booking platform with taxi services and hotel accommodations.",
    github: "https://github.com/Abdulmajid48/tripace",
    server: "https://tripace.vercel.app/",
  },

  {
    img: "./images/resultsummary.png",
    name: "Results summary",
    logo: ["./images/html.svg", "./images/css.svg"],
    description:
      "A solution to the Results summary component challenge on Frontend Mentor.",
    github: "https://github.com/Abdulmajid48/resultsummary",
    server: "https://resultsummary-topaz.vercel.app/",
  },
  {
    img: "./images/todolistapp.png",
    name: "Todo App",
    logo: ["./images/react.svg", "./images/css.svg"],
    description: "A solution to the Todo App challenge on Frontend Mentor.",
    github: "https://github.com/Abdulmajid48/todolistapp",
    server: "https://todolistapp-snkz-g9qo2rpg0-abdulmajid48.vercel.app/9",
  },

  {
    img: "./images/testimonials.png",
    name: "Testimonials",
    logo: ["./images/html.svg", "./images/css.svg"],
    description:
      "A solution to the Testimonials Grid Section on Frontend Mentor.",
    github: "https://github.com/Abdulmajid48/testimonials",
    server: "https://testimonials-mu.vercel.app/",
  },
  {
    img: "./images/todolist.png",
    name: "Todolist",
    logo: ["./images/ejs.svg", "./images/postgressql.svg"],
    description: "A Todolist built with Postgressql and Ejs.",
    github: "https://github.com/Abdulmajid48/todolist",
    server: "",
  },
  {
    img: "./images/drumkit.png",
    name: "Drumkit",
    logo: ["./images/html.svg", "./images/css.svg", "./images/javascript.svg"],
    description: "A Drumkit built with html, css and javascript.",
    github: "https://github.com/Abdulmajid48/drumkit",
    server: "https://drumkit-ecru-one.vercel.app/",
  },
  {
    img: "./images/mondrian.png",
    name: "Mondrain Art",
    logo: ["./images/html.svg", "./images/css.svg"],
    description: "A Mondrian Art built with html and css Grid",
    github: "https://github.com/Abdulmajid48/mondrian",
    server: "https://mondrian-ivory.vercel.app/",
  },
  {
    img: "./images/tindog.png",
    name: "Tindog",
    logo: ["./images/html.svg", "./images/css.svg", "./images/bootstrap.svg"],
    description: "A Drumkit built with html, css and bootstrap.",
    github: "https://github.com/Abdulmajid48/tindogwebsite",
    server: "https://tindogwebsite.vercel.app//",
  },
  {
    img: "./images/simongame.png",
    name: "Simon Game Challenge",
    logo: ["./images/html.svg", "./images/css.svg", "./images/javascript.svg"],
    description: "A Simon game built with html, css and javascript",
    github: "https://github.com/Abdulmajid48/simongamechallenge",
    server: "https://simongamechallenge.vercel.app/",
  },
  {
    img: "./images/portfoliosample.png",
    name: "Portfolio Sample",
    logo: ["./images/html.svg", "./images/css.svg"],
    description: "A Portfolio website built with html and css",
    github: "https://github.com/Abdulmajid48/portfoliosample",
    server: "https://portfoliosample-theta.vercel.app/",
  },
  //   {
  //     img: "./images/memeproject.png",
  //     name: "Meme Project",
  //     logo: ["./images/html.svg", "./images/css.svg"],
  //     description: "A Portfolio website built with html and css",
  //     github: "https://github.com/Abdulmajid48/memeproject",
  //     server: "https://memeproject-ten.vercel.app/",
  //   },
];

export default Projects;
