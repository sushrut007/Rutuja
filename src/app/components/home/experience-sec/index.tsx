import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2018 - 2022",
            title: "Graphics Designer",
            company: "Machbizz Marketers Pvt Ltd",
            type: "Fulltime",
            description:
                "Designed social media creatives, banners, GIFs, animations, logos, landing pages, presentations, and branding materials. Improved visual communication for marketing campaigns and conducted visual testing for newsletters and landing pages."
        },
        {
            year: "2022 - 2023",
            title: "Sr. Graphics & UI Designer",
            company: "Machintel Pvt Ltd",
            type: "Fulltime",
            description:
                "Created wireframes, prototypes, and high-fidelity web application designs in Figma. Designed websites, landing pages, infographics, and social media creatives. Built reusable components and improved UX for responsiveness and navigation."
        },
        {
            year: "2023 - Present",
            title: "UI/UX Designer",
            company: "RioMed Technologies Pvt Ltd",
            type: "Fulltime",
            description:
                "Leading end-to-end UI/UX design for healthcare platforms. Conducted user research and usability testing. Designed wireframes, prototypes, micro-interactions, and high-fidelity screens. Built and maintained a design system ensuring accessibility and consistency across products."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
                            >
                                {/* Year + Title */}
                                <div>
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                {/* Timeline Column */}
                                <div className="relative">
                                    {index < experiences.length && (
                                        <div
                                            className={`absolute left-0 top-3 w-px ${
                                                index < experiences.length - 1 ? "h-40" : "h-30"
                                            } bg-softGray`}
                                        ></div>
                                    )}

                                    {/* FIXED — highlight the LAST item */}
                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div
                                            className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                                                index === experiences.length - 1 ? "border-primary" : "border-black"
                                            }`}
                                        >
                                            {index === experiences.length - 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Company + Type */}
                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">
                                                {exp.company}
                                            </span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
