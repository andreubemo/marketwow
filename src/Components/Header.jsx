import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { WrenchScrewdriverIcon, HomeIcon } from "@heroicons/react/24/outline";

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Navigation() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 576;

  const [homeActive, setHomeActive] = useState(true);
  const [constructorActive, setConstructorActive] = useState(false);

  return (
    <nav className="fixed top-0 z-10 flex h-14 w-full items-center justify-between gap-4 bg-purewhite px-4">
      <NavLink
        to="/"
        className="flex justify-start pl-2"
        onClick={() => {
          setHomeActive(true);
          setConstructorActive(false);
        }}
      >
        <img
          width={isMobile ? 35 : 167}
          height={isMobile ? 35 : 22}
          src={
            isMobile ? "/img/logo-mini-color.png" : "/img/logo-marketwow.png"
          }
          alt="hero"
          className="object-fit"
        />
      </NavLink>
      <div className="flex w-1/2 items-center justify-center gap-6">
        <NavLink
          to="/"
          className={`flex h-14 w-fit items-center justify-center gap-2 px-6 
          ${homeActive ? "bg-purewhite text-orange" : "text-black-25"}`}
          onClick={() => {
            setHomeActive(true);
            setConstructorActive(false);
          }}
        >
          <HomeIcon className="h-5 w-5" />
          <p className="hidden md:block">Home</p>
        </NavLink>
        <NavLink
          to="/constructor"
          className={`flex h-14 w-fit items-center justify-center gap-2 px-6 
          ${constructorActive ? "bg-purewhite text-orange" : "text-black-25"}`}
          onClick={() => {
            setConstructorActive(true);
            setHomeActive(false);
          }}
        >
          <WrenchScrewdriverIcon className="h-5 w-5" />
          <p className="hidden md:block">Constructor</p>
        </NavLink>
      </div>
    </nav>
  );
}
