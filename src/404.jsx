import React from "react";

const NotFoundPage = ({ darkMode }) => {
  return (
    <section className="relative py-20 md:py-28 lg:py-52 overflow-hidden bg-gray-900 p-8">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-md md:max-w-2xl lg:max-w-none mx-auto">
              <h2 className="font-heading text-4xl xs:text-6xl font-bold text-white mb-12">
                <span>Currently Updating-</span>
                <span className="block font-serif italic">Back soon!</span>
              </h2>
              <div className="sm:flex max-w-sm sm:max-w-lg">
                <div className="mb-6 sm:mb-0 sm:mr-3 pt-3">
                  <svg width="84" height="10" viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z" fill="#FAFBFC"></path>
                  </svg>
                </div>
                <div className="max-w-md">
                  <p className="sm:text-xl text-gray-400 font-semibold mb-14">Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:</p>
                  <a className="relative group inline-block py-3 px-5 text-center text-sm font-semibold text-orange-50 hover:text-orange-900 bg-orange-900 rounded-full overflow-hidden transition duration-200" href="/">
                    <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Take me home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img className="block mx-auto" src="https://shuffle.dev/saturn-assets/images/http-codes/alien-dark-1.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
