import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        
        {/* Background Image */}
        <div className="absolute top-0 w-full px-9">
          <Image
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume background"
            width={1200}
            height={348}
            className="w-full"
            priority
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            
            {/* Section Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              
              {/* Left Image */}
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="About banner"
                  width={303}
                  height={440}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I'm a UI/UX Designer with 7 years of experience crafting user-centered,
                  accessible digital products for healthcare and B2B platforms. I specialize in
                  wireframing, prototyping, interaction design, usability testing, and building
                  scalable design systems.
                  <br /><br />
                  I work closely with cross-functional teams to conduct user research, define
                  workflows, and transform complex requirements into intuitive, responsive,
                  WCAG/ADA-compliant interfaces. Skilled in Figma, Adobe XD, Sketch, and
                  Creative Suite, I design thoughtful digital experiences that solve real problems.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "07+", label: "Years of Experience" },
                    { count: "40+", label: "Projects Completed" },
                    { count: "12+", label: "Major Products Designed" },
                  ].map((item, index) => (
                    <div key={index}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="language icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Languages</p>
                  </div>

                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Hindi", "Marathi"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
