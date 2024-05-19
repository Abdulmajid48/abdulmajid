import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Navbar Section

function Navbar(props) {
  // ------------Responsiveness----------------
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 674px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 674px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // --------------Top right button for smaller devices option------------------------
  const [bar, toggleBar] = useState(false);

  function setBar() {
    return toggleBar((prev) => {
      return !prev;
    });
  }
  // ---------------------------
  return (
    <div className=" font-normal bg-[#3D3E42]">
      {matches ? (
        //--------------Smaller device------------------
        <div className="h-24 sm:w-11/12 flex flex-row justify-between mr-4 ml-4 items-center pr-10">
          <div className=" flex flex-row items-center text-xl gap-2">
            <img src="./images/logo.png" alt="" className="h-24" />
          </div>
          <div onClick={setBar} className="-mr-6">
            {bar ? (
              //Option button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              //Close button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </div>
          {/* ------------Options----------------- */}
          <div
            style={{ visibility: bar ? "visible" : "hidden" }}
            className="absolute right-5 top-20 leading-loose bg-[#31333B] text-[#D6D6D6] rounded-lg w-44 p-4 h-52 text-left text-lg flex flex-col gap-2 py-4 z-10"
          >
            <div
              className="hover:text-[#F9F9F9]"
              onClick={() => {
                window.location.href = "#about";
              }}
            >
              About
            </div>
            <div
              className="hover:text-[#F9F9F9]"
              onClick={() => {
                window.location.href = "#projects";
              }}
            >
              Projects
            </div>
            <div
              className="hover:text-[#F9F9F9]"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Contact
            </div>
            <NavLink to="https://drive.google.com/file/d/1-COEwJtG796gNmroKQcO1RpqudMt6r5D/view?usp=sharing">
              {" "}
              <button className="hover:text-[#F9F9F9]">Resume</button>
            </NavLink>
            {/* <input
              type="search"
              placeholder="Search"
              className=" p-1 pl-3 rounded-lg bg-[#31333B]"
            /> */}
          </div>
        </div>
      ) : (
        // -----------------Larger screen Navbar------------------
        <div className=" h-24">
          <div className="flex flex-row justify-between pt-3 items-center pr-20 pl-7">
            <div>
              <img src="./images/logo.png" alt="" className="h-24" />
            </div>
            <div className="flex flex-row justify-center gap-6 text-[#D6D6D6]">
              <div
                className="hover:text-[#F9F9F9]"
                onClick={() => {
                  window.location.href = "#about";
                }}
              >
                About
              </div>
              <div
                className="hover:text-[#F9F9F9]"
                onClick={() => {
                  window.location.href = "#projects";
                }}
              >
                Projects
              </div>
              <div
                className="hover:text-[#F9F9F9]"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Contact
              </div>
            </div>
            <div>
              <NavLink to="https://drive.google.com/file/d/1-COEwJtG796gNmroKQcO1RpqudMt6r5D/view?usp=sharing">
                <button className="bg-[#31333B] p-1 pl-3 rounded-lg focus:border-[#3D3E42] h-10 w-40">
                  Resume
                </button>
                {/* <input
                type="search"
                placeholder="Search"
                className="bg-[#31333B] p-1 pl-3 rounded-lg focus:border-[#3D3E42] h-10 w-40"
              /> */}
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
