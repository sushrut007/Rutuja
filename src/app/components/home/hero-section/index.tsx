"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 gap-6 md:gap-8 lg:gap-4 items-start lg:items-center">

          {/* Left Section Text */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 max-w-2xl w-full">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl">I'm Rutuja</h1>

                <div className="wave h-fit w-fit">
                  <Image
                    src="/images/home/banner/wave-icon.svg"
                    alt="wave-icon"
                    width={50}
                    height={50}
                    className="sm:w-14 sm:h-14 md:w-16 md:h-16"
                  />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl">UI/UX Designer</h1>
            </div>

            <p className="text-secondary font-normal text-sm sm:text-base md:text-lg max-w-md lg:max-w-xl leading-relaxed">
              UI/UX Designer with 7 years of experience crafting user-centered
              digital experiences for healthcare and B2B platforms. I specialize
              in wireframing, prototyping, interaction design, user research, and
              building scalable, accessible design systems that enhance usability
              and business outcomes.
            </p>
          </div>

          {/* Mobile Banner Image */}
          <Image
            src="/images/home/banner/banner-img.png"
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Desktop Banner Image */}
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src="/images/home/banner/banner-img.png"
          alt="banner-img"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
