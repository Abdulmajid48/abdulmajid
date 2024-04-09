import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Navbar from "../components/Navbar";

function Home(props) {
  return (
    <div>
      <Navbar />
      <div className="bg-img min-w-fit min-h-screen bg-cover bg-fifty flex flex-row justify-center font-serif">
        <div className="flex flex-col justify-center items-center py-8 text-rose-50 text-3xl gap-10 text-center">
          <div className="">
            <img
              src="./images/profile.jpg"
              alt=""
              className="rounded-full h-40 w-40 object-cover"
            />
          </div>
          <div className="text-3xl">Abdul-Majid Aladejana</div>
          <div className="text-3xl w-11/12">Web developer</div>
          <div className="flex flex-row justify-between text-rose-50 gap-3">
            <div className="">
              <GitHubIcon sx={{ fontSize: 40 }} />
            </div>
            <div>
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </div>
            <div>
              <XIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
          <div className="h-12 w-40 rounded-lg border-solid border-2 border-white hover:bg-white hover:text-black p-1 flex flex-row items-center justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            <div> Résumé</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
