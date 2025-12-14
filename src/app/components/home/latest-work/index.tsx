"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };

    fetchData();
  }, []);

  // 🟧 Function that handles link logic
  const getProjectLink = (item: any) => {
    if (item.linkType === "internal") return item.link;
    if (item.linkType === "external") return item.link;
    if (item.linkType === "pdf") return item.link;
    return "#";
  };

  // 🟦 Decide if link must open in new tab
  const getTarget = (type: string) => {
    if (type === "external" || type === "pdf") return "_blank";
    return "_self";
  };

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            
            {/* Section Heading */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* Work Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: any) => {
                const projectLink = getProjectLink(value);
                const openType = getTarget(value.linkType);

                return (
                  <div key={index} className="group flex flex-col gap-3 xl:gap-6">

                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={getImgPath(value.image)}
                        alt={value.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                      />

                      {/* Hover Overlay */}
                      <Link
                        href={projectLink}
                        target={openType}
                        className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg transition-all"
                      >
                        <span className="flex justify-center items-center p-5 w-full">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#FE4300"
                            />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>

                    {/* Title + Client */}
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">

                        {/* Title Link */}
                        <Link href={projectLink} target={openType}>
                          <h5>{value.title}</h5>
                        </Link>

                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right-arrow"
                          width={30}
                          height={30}
                        />
                      </div>

                      <p>Client: {value.client}</p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
