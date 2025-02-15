"use client";

import BurgerMenu from "./BurgerMenu";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [availablePages, setAvailablePages] = useState([
    { name: "Home", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Projects", path: "/projects" },
    { name: "Tools", path: "/tools" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <header className="mb-8">
      {burgerMenu ? <BurgerMenu pages={availablePages} /> : null}
      <div className="w-3/4 md:w-1/2 h-16 my-2 p-6 flex flex-row justify-between items-center bg-[#2e2e2e] rounded-3xl mx-auto">
        <HeaderItem
          href="/"
          src="/logo.svg"
          alt="Logo Icon"
          style={{ width: "32px", height: "32px", color: "white" }}
        />
        <button
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <img
            src="/burger.svg"
            style={{ width: "32px", height: "32px", fill: "white" }}
            alt="Burger Menu icon"
          />
        </button>
      </div>
    </header>
  );
}
