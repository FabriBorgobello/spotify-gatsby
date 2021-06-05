import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-5">
      <nav className="mx-auto w-10/12">
        <div className="w-full flex">
          <div className="w-1/6 ">
            <Link to="/">
              <StaticImage alt="Spotify logo" src="../images/spotify-logo.svg" width={132} height={40} />
            </Link>
          </div>
          <div className="w-3/6 flex justify-evenly items-start">
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
          <div className="w-2/6 ">
            <ul className="flex justify-end">
              <li className="w-14 h-14 bg-gray-800 flex items-center justify-center rounded-full mr-4">
                <a href="https://www.instagram.com/spotify/">
                  <StaticImage alt="instagram logo" src="../images/instagram.svg" width={24} height={24} />
                </a>
              </li>
              <li className="w-14 h-14 bg-gray-800 flex items-center justify-center rounded-full mr-4">
                <a href="https://twitter.com/spotify">
                  <StaticImage alt="twitter logo" src="../images/twitter.svg" width={24} height={24} />
                </a>
              </li>
              <li className="w-14 h-14 bg-gray-800 flex items-center justify-center rounded-full mr-4">
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
