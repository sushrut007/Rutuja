"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WorkItem {
  image: string;
  title: string;
  client: string;
  link: string;
  linkType: "internal" | "external" | "pdf";
}

const LatestWork = () => {
  const [workData, setWorkData] = useState<WorkItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/work-data.json");
        if (!res.ok) throw new Error("Failed to fetch work data");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };

    fetchData();
  }, []);

  /* Decide project link */
  const getProjectLink = (item: WorkItem) => {
    return item.link || "#";
  };

  /* Decide target */
  const getTarget = (type: WorkItem["linkType"]) => {
    return type === "external" || type === "pdf" ? "_blank" : "_self";
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
              {workData?.map((item, index) => {
                const projectLink = getProjectLink(item);
                const target = getTarget(item.linkType);

                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                      />

                      {/* Hover Overlay */}
                      <Link
                        href={projectLink}
                        target={target}
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
                        <Link href={projectLink} target={target}>
                          <h5>{item.title}</h5>
                        </Link>

                        <Image
                          src="/images/icon/right-arrow-icon.svg"
                          alt="right-arrow"
                          width={30}
                          height={30}
                        />
                      </div>

                      <p>Client: {item.client}</p>
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
