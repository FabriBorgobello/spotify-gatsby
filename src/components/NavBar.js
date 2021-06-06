import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const NavBar = () => {
  return (
    <nav className="h-20 bg-black text-white">
      <div className="w-10/12 lg:w-8/12 mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <StaticImage src="../images/spotify-logo.svg" alt="spotify logo" />
          </Link>
        </div>

        <ul className="flex items-center">
          <li className="py-7 px-4 font-bold">
            <Link to="/premium">Premium</Link>
          </li>
          <li className="py-7 px-4 font-bold">
            <Link to="/support">Support</Link>
          </li>
          <li className="py-7 px-4 font-bold">
            <Link to="/download">Download</Link>
          </li>
          <li role="separator" className="w-px h-4 bg-white mx-4"></li>
          <li className="py-7 px-4 font-bold text-gray-50">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="py-7 px-4 font-bold text-gray-50">
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
