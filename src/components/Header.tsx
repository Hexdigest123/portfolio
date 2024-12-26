"use client"

import BurgerMenu from "./BurgerMenu";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [availablePages, setAvailablePages] = useState([
    { name: "Home", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Projects", path: "/projects" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
  ])

  return (
    <header className="mb-8">
      {burgerMenu ? <BurgerMenu pages={availablePages} /> : null}
      <div className="w-3/4 md:w-1/2 h-16 my-2 p-6 flex flex-row justify-between items-center border-gray-700 border-2 rounded-3xl mx-auto">
        <HeaderItem href="/" src="/logo.svg" alt="Logo Icon" style={{ width: "32px", height: "32px" }} />
        <button onClick={() => { setBurgerMenu(!burgerMenu); }}><img src="/burger.svg" style={{ width: "32px", height: "32px" }} alt="Burger Menu icon" /></button>
      </div>
    </header>
  );
}
