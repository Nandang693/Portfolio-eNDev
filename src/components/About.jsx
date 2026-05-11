const About = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-addition justify-center">
      {/* subtittle about me */}
      <div className="flex md:flex-row flex-col bg-primary h-full md:h-4/5 md:pl-15 md:items-center mt-15 md:mt-0 pt-16 md:pt-0">
        <h2 className="md:w-1/2 md:text-9xl text-6xl font-extrabold ml-5">ABOUT ME</h2>
        <div>
          {/* about me */}
          <div className="ml-5">
            <h3 className="font-bold md:text-3xl text-2xl mb-5 mt-20 md:mt-0">FRONTEND DEVELOPER</h3>
            <p className="font-light md:w-2/3 w-[90%] text-xl">A programmer with 2 years of experience, striving to be different and the best of all.</p>
            <p className="font-light md-10 mt-5 text-xl">Hopefully, we can have a fun collaboration.</p>
          </div>

          {/* Experience */}
          <div className="flex justify-between md:-p-3 mt-25 md:mt-10 gap-2 md:gap-0 md:mr-35">
            <div className="gap- flex flex-col w-35 h-20 bg-object2 rounded-xl items-center justify-end text-center pb-2">
              <p>🔥</p>
              <h4 className="font-bold text-sm mt-1">2+</h4>
              <p className=" text-[12px]">Years experience</p>
            </div>
            <div className="gap- flex flex-col w-35 h-20 bg-object2 rounded-xl items-center justify-end text-center pb-2">
              <p>🌎</p>
              <h4 className="font-bold text-sm mt-1">10+</h4>
              <p className=" text-[12px]">Client World Wide</p>
            </div>
            <div className="gap- flex flex-col w-35 h-20 bg-object2 rounded-xl items-center justify-end text-center pb-2">
              <p>💻</p>
              <h4 className="font-bold text-sm mt-1">30+</h4>
              <p className=" text-[12px]">Project Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
