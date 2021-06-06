import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useWindowSize } from "../hooks/useWindowSize";

const NavBar = () => {
  const { width } = useWindowSize();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    document.querySelector("body").style.overflow = "hidden";
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    document.querySelector("body").style.overflow = "scroll";
    setIsDrawerOpen(false);
  };

  let Drawer;
  if (width < 768) {
    Drawer = React.lazy(() => import("./Drawer.js"));
  }

  return (
    <nav className="h-14 md:h-20 bg-black text-white">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-4 h-full">
        <div>
          <Link to="/">
            {width >= 768 ? (
              <StaticImage src="../images/spotify-logo.svg" alt="spotify logo" />
            ) : (
              <StaticImage src="../images/spotify-logo.svg" alt="spotify logo" width={81} />
            )}
          </Link>
        </div>
        {width >= 768 ? (
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
        ) : (
          <>
            <StaticImage
              className="cursor-pointer"
              alt="menu"
              src="../images/burger-menu.svg"
              width={24}
              height={24}
              onClick={handleOpenDrawer}
            />
            {isDrawerOpen && (
              <React.Suspense fallback={""}>
                <Drawer onClose={handleCloseDrawer} />
              </React.Suspense>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
