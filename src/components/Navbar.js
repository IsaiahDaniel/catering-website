import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.svg";
import Button from "./Button";
import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu ] = useState(false);

  return (
    <div>
      <div className="container mx-auto z-50 absolute top-0 right-0 left-0 text-white pt-10">
        <nav className="hidden md:flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" style={{ width: "200px" }} />
          </div>

          <ul className="flex">
            <li className="mr-10">
              <Link>Home</Link>
            </li>

            <li className="mr-10">
              <Link>Services</Link>
            </li>

            <li className="mr-10">
              <Link>Menu</Link>
            </li>

            <li className="mr-10">
              <Link>About</Link>
            </li>

            <li className="mr-10">
              <Link>Blog</Link>
            </li>

            <li className="mr-10">
              <Link>Contact</Link>
            </li>
          </ul>

          <div>
            <Button text="Reservation" light />
          </div>
        </nav>

        <nav className="flex items-center justify-between p-10 md:p-0 md:hidden" onClick={() => setShowMobileMenu(true)}>
          <div>
            <img src={logo} alt="logo" style={{ width: "150px" }} />
          </div>
          <div className="md:hidden">
            <AiOutlineBars size={30} />
          </div>
        </nav>
      </div>
      {/* top-[-1000px] */}

      { showMobileMenu && (

        <motion.div 
          // initial={{ y: 1000 }}
          // animate={{ y: -1000  }}
          className="bg-mobile absolute top-0 left-0 right-0 bottom-0 h-screen min-w-full md:hidden z-50">
          <div className="ml-[400px] mt-10 cursor-pointer" onClick={() => setShowMobileMenu(false)}>
            <AiOutlineClose color="white" size={34} />
          </div>
          <ul className="flex flex-col h-screen items-center justify-center text-center text-white">
            <div className="mb-10">
              <img src={logo} alt="logo" style={{ width: "150px" }} />
            </div>
            <li className="mb-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-5">
              <Link to="/services">Services</Link>
            </li>
            <li className="mb-5">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="mb-5">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-5">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="mb-5">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <div>
                <Button
                  text="Reservation"
                  dark
                  classNames="pl-4 pr-4 pt-2 pb-2"
                />
              </div>
            </li>
          </ul>
        </motion.div>
      ) }

    </div>
  );
};

export default Navbar;
