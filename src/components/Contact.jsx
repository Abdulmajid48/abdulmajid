// Social Media Icons from Material UI
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Contact Section
function Contact(props) {
  return (
    <div
      className="bg-[#3D3E42] h-[18rem] sm:h-[14.7rem] md:h-[14.2rem]  relative"
      id="contact"
    >
      {/* ----------Contact me and Top Horizontal line------------- */}
      <div className="flex flex-row justify-center items-start m-auto">
        <div className="border-t-2 border-[#F0BF6C] flex-grow"></div>
        <div className="font-bold sm:text-4xl text-3xl sm:-mt-6 -mt-5 sm:px-8 px-5 text-center">
          Contact Me
        </div>
        <div className="border-t-2 border-[#F0BF6C] flex-grow"></div>
      </div>
      {/* -------------Three contact divs ------------ */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-3 w-4/5 sm:w-11/12 md:w-3/4 lg:w-2/3 m-auto mt-10 mb-16">
        <NavLink to="https://www.linkedin.com/in/abdul-majid-aladejana">
          <div className="flex flex-row items-center justify-center rounded-lg gap-2 w-64 md:w-72 h-12 bg-[#31333B]">
            <LinkedInIcon />
            <p className="text-[#F0BF6C]">Abdul-Majid Aladejana </p>
          </div>
        </NavLink>
        <NavLink to="https://x.com/aladejanaamajid">
          <div className="flex flex-row items-center justify-center rounded-lg gap-2 w-64 md:w-72 h-12 bg-[#31333B]">
            <XIcon />
            <p className="text-[#F0BF6C]">@aladejanaamajid </p>
          </div>
        </NavLink>
        <NavLink to="https://drive.google.com/file/d/1-COEwJtG796gNmroKQcO1RpqudMt6r5D/view?usp=sharing">
          <div className="flex flex-row items-center justify-center rounded-lg gap-2 w-64 md:w-72 h-12 bg-[#31333B]">
            <img src="./images/resume.svg" alt="" className="h-5" />
            <p className="text-[#F0BF6C]">Resume</p>
          </div>
        </NavLink>
      </div>
      {/* --------ICons and Bottom Horizontal line------------ */}
      <div className="flex flex-row justify-center items-start m-auto">
        <div className="border-t-2 border-[#F0BF6C] flex-grow"></div>
        <div className="flex flex-row gap-2 font-bold sm:text-5xl text-3xl sm:-mt-7 -mt-5 sm:px-5 px-5 text-center">
          <NavLink to="https://aladejanamajid48@gmail.com">
            <img
              src="./images/email.svg"
              alt=""
              className="h-8 sm:mt-[13px] mt-[6px]"
            />
          </NavLink>
          <NavLink to="https://github.com/Abdulmajid48">
            <GitHubIcon />
          </NavLink>
          <NavLink to="https://web.facebook.com/aladejana.abdulmajid">
            <FacebookRoundedIcon />
          </NavLink>
          <NavLink to="https://discordapp.com/users/abdulmajid48">
            <img
              src="./images/discord.svg"
              alt=""
              className="h-6 sm:mt-[18px] mt-[8px]"
            />
          </NavLink>
          <NavLink to="https://abdulmajid.hashnode.dev/">
            <img
              src="./images/hashnode.svg"
              alt=""
              className="h-6 sm:mt-[18px] mt-[8px]"
            />
          </NavLink>
          {/* <InstagramIcon /> */}
        </div>
        <div className="border-t-2 border-[#F0BF6C] flex-grow"></div>
      </div>
    </div>
  );
}

export default Contact;
