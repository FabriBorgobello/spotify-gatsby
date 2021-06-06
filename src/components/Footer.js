import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
const Footer = () => {
  const { width } = useWindowSize();

  return (
    <footer className="bg-black text-white py-12 lg:py-20 ">
      <nav className="md:mx-auto max-w-screen-lg w-4/5 lg:w-full px-4">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-1/6 md:pl-4">
            <Link to="/">
              {width >= 768 ? (
                <StaticImage alt="Spotify logo" src="../images/spotify-logo.svg" width={132} height={40} />
              ) : (
                <StaticImage alt="Spotify logo" src="../images/spotify-logo.svg" width={88} />
              )}
            </Link>
          </div>
          <div className="lg:w-3/6 flex flex-col md:flex-row justify-evenly items-start">
            <dl>
              <dt className=" text-sm my-5 font-black text-gray-500">COMPANY</dt>
              <dd className="flex flex-col">
                <span className="mt-1 mb-4">About</span>
                <span className="mt-1 mb-4">Jobs</span>
                <span className="mt-1 mb-4">For the Record</span>
              </dd>
            </dl>
            <dl>
              <dt className=" text-sm my-5 font-black text-gray-500">COMMUNITIES</dt>
              <dd className="flex flex-col">
                <span className="mt-1 mb-4">For Artist</span>
                <span className="mt-1 mb-4">Developers</span>
                <span className="mt-1 mb-4">Advertising</span>
                <span className="mt-1 mb-4">Investors</span>
                <span className="mt-1 mb-4">Vendors</span>
              </dd>
            </dl>
            <dl>
              <dt className=" text-sm my-5 font-black text-gray-500">USEFUL LINKS</dt>
              <dd className="flex flex-col">
                <span className="mt-1 mb-4">Support</span>
                <span className="mt-1 mb-4">Web Player</span>
                <span className="mt-1 mb-4">Free Mobile App</span>
              </dd>
            </dl>
          </div>
          <div className="mt-32 md:mt-0 lg:w-2/6 ">
            <ul className="flex justify-start lg:justify-end">
              <li className="w-11 h-11 md:w-14 md:h-14 bg-gray-800 flex items-center justify-center rounded-full mr-4">
                <a href="https://www.instagram.com/spotify/">
                  <StaticImage alt="instagram logo" src="../images/instagram.svg" width={24} height={24} />
                </a>
              </li>
              <li className="w-11 h-11 md:w-14 md:h-14 bg-gray-800 flex items-center justify-center rounded-full mr-4">
                <a href="https://twitter.com/spotify">
                  <StaticImage alt="twitter logo" src="../images/twitter.svg" width={24} height={24} />
                </a>
              </li>
              <li className="w-11 h-11 md:w-14 md:h-14 bg-gray-800 flex items-center justify-center rounded-full mr-4">
                <a href="https://facebook.com/Spotify">
                  <StaticImage alt="facebook logo" src="../images/facebook.svg" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
