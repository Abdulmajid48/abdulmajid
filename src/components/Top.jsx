// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
function Top(props) {
  return (
    <div className="flex flex-row justify-center items-center px-16 leading-loose relative min-h-[25rem] bg-[#3D3E42]">
      <div className="  text-center">
        <p>
          I'M{" "}
          <span className="text-[#F0BF6C] text-2xl sm:text-3xl">
            {" "}
            Abdul-Majid Aladejana{" "}
          </span>
        </p>
        <p> Frontend Developer and Technical Writer</p>
        <button
          className="border-[#F0BF6C] border-2 text-[#F0BF6C] p-1 rounded-md text-sm mt-3 w-24"
          onClick={() => {
            window.location.href = "#contact";
          }}
        >
          Contact Me
        </button>
      </div>
      <div className="border-r-2 border-[#F0BF6C] h-[9rem] absolute sm:right-20 top-[2.5rem] right-10"></div>
      <div className="flex flex-col absolute sm:-right-3 top-[14rem] gap-4 -mt-4 sm:pr-20 pr-10 -right-3">
        <NavLink to="https://github.com/Abdulmajid48">
          <GitHubIcon />
        </NavLink>
        <NavLink to="https://x.com/aladejanaamajid">
          <XIcon />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/abdul-majid-aladejana">
          <LinkedInIcon />
        </NavLink>
        <NavLink to="https://abdulmajid.hashnode.dev/">
          <div>
            <img src="./images/hashnode.svg" alt="" className="h-5" />
          </div>
        </NavLink>
        {/* <NavLink to="https://web.facebook.com/aladejana.abdulmajid">
          <FacebookRoundedIcon />
        </NavLink> */}
        {/* <NavLink to="">
          <InstagramIcon />
        </NavLink> */}
      </div>
    </div>
  );
}

export default Top;
