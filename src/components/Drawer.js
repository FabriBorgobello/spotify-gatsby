import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Drawer = ({ onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 bg-black overflow-hidden flex flex-col justify-between pl-9 py-9 transition-transform">
      <StaticImage className="absolute top-2 right-2 cursor-pointer" src="../images/close.svg" alt="close" onClick={onClose} />
      <ul className="flex flex-col text-white">
        <li className="text-3xl pb-6 font-bold">
          <Link onClick={onClose} to="/premium">
            Premium
          </Link>
        </li>
        <li className="text-3xl pb-6 font-bold">
          <Link onClick={onClose} to="/support">
            Support
          </Link>
        </li>
        <li className="text-3xl pb-6 font-bold">
          <Link onClick={onClose} to="/download">
            Download
          </Link>
        </li>
        <li role="separator" className="h-px w-4 bg-white mt-5 mb-10"></li>
        <li className="text-2xl pb-6 text-gray-50">
          <Link onClick={onClose} to="/signup">
            Sign up
          </Link>
        </li>
        <li className="text-2xl pb-6 text-gray-50">
          <Link onClick={onClose} to="/login">
            Log in
          </Link>
        </li>
      </ul>
      <StaticImage alt="Spotify logo" src="../images/spotify-logo.svg" width={88} layout="fixed" />
    </div>
  );
};

export default Drawer;
