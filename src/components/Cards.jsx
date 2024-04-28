function Project(props) {
  return (
    <div className="rounded-2xl flex flex-col justify-center items-center bg-white max-h-fit sm:p-2 sm:m-5 sm:w-96 w-10/12 max-w-80w font-serif mt-3">
      <div className="h-auto">
        <img
          src={props.img}
          alt=""
          className=" rounded-xl object-contain max-h-64 w-11/12 m-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-6 pt-1">
        <p className="text-center text-2xl text-black ">{props.name}</p>
        <div className="flex flex-row justify-between items-center gap-4 mt-2">
          {props.logo}
        </div>
        <p className="text-center pt-2 pb-2 font-medium text-lg m-1">
          {props.description}
        </p>
        <div className="flex flex-row justify-center gap-4">
          <a href={props.server}>
            <button type="button" class="btn btn-primary">
              View Live
            </button>
          </a>
          <a href={props.github}>
            <button type="button" class="btn btn-dark">
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

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
    logo: ["./images/react.svg"],
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
  {
    img: "./images/memeproject.png",
    name: "Meme Project",
    logo: ["./images/html.svg", "./images/css.svg"],
    description: "A Portfolio website built with html and css",
    github: "https://github.com/Abdulmajid48/memeproject",
    server: "https://memeproject-ten.vercel.app/",
  },
];

export default Project;
export { projects };
