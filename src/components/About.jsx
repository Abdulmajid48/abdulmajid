// About Section

function About(props) {
  return (
    <div className="bg-[#31333B]" id="about">
      <div className="pt-20 m-auto flex flex-row gap-2 justify-center items-start w-5/6 ml-10 pb-20">
        <div className=" w-8 border-b-2 border-[#F0BF6C] -mt-12 pb-5 text-2xl sm:text-3xl font-bold">
          About
        </div>
        <div className="">
          A Front-end development enthusiast seeking an internship position to
          leverage skills in HTML, CSS, JavaScript, and various frameworks to
          contribute to dynamic web projects.{" "}
          <span className="text-[#F0BF6C]">
            Eager to learn and collaborate{" "}
          </span>
          in a professional environment to further enhance my expertise in web
          development.
        </div>
      </div>
    </div>
  );
}

export default About;
