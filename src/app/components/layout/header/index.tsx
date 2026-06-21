"use client";

import Logo from "../logo";

const Header = () => {
  const handlePDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Rutuja Nazare_Designer 7 years .pdf"; // <-- path to your pdf
    link.download = "Rutuja-Nazare-Resume.pdf";     // <-- filename when downloaded
    link.click();
  };

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-4 sm:py-5 md:py-7">
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Download Resume Button */}
            <button
              onClick={handlePDFDownload}
              className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-2.5 md:py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-7 border border-primary rounded-full group flex-shrink-0"
            >
              <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                Download PDF
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
