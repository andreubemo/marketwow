import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [homeActive, setHomeActive] = useState(true);
  const [constructorActive, setConstructorActive] = useState(false);

  return (
    <footer className="flex h-fit w-full flex-col items-center justify-center gap-4 bg-purewhite p-4">
      <div className="flex w-full items-center justify-center gap-4">
        <NavLink
          to="/"
          className={`flex w-fit items-center justify-center gap-2 px-6 
    ${homeActive ? "bg-purewhite text-orange" : "text-black-25"}`}
          onClick={() => {
            setHomeActive(true);
            setConstructorActive(false);
          }}
        >
          <p className="">Home</p>
        </NavLink>
        <NavLink
          to="/constructor"
          className={`flex w-fit items-center justify-center gap-2 px-8 
    ${constructorActive ? "bg-purewhite text-orange" : "text-black-25"}`}
          onClick={() => {
            setConstructorActive(true);
            setHomeActive(false);
          }}
        >
          <p className="">Constructor</p>
        </NavLink>
      </div>
      <div>
        <p className="text-center text-xs">
          Marketwow.es | NIF:47812248D | C/ Corró 28, Cardedeu 08440, Barcelona
          | Telf.; 600363140 | Email; marketwow.es@gmail.com
        </p>
      </div>
    </footer>
  );
}
