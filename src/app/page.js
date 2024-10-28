"use client";
import React from "react";
import {
  DigitalClock,
  Header,
  ImageGrid,
  StyledButton,
} from "glenderm04-my-first-component-library";
import { Navbar } from "glenderm04-my-first-component-library";


const navItems = [
  { label: "Inicio", link: "/" },
  { label: "Servicios", link: "/servicios" },
  { label: "Contacto", link: "/contacto" },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar items={navItems} />
      <h1>Home Page</h1>
      <StyledButton route={"/home"}>Click me</StyledButton>
      <DigitalClock />
      <ImageGrid />
    </div>
  );
};

export default HomePage;
