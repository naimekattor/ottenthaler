import React from "react";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
} from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="w-full bg-white md:block hidden">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Left: Address */}
        <div className="flex items-center gap-3 py-2 text-[#333333] text-[16px] font-montserrat  px-6">
          <FaMapMarkerAlt />
          <span>Wolfgang-Leeb-Straße 17
84513 Töging am Inn
</span>
        </div>

        {/* Right: Email + Socials */}
        <div className="flex items-center relative gap-10 before:content-[''] before:block before:w-full before:h-full before:bg-primary before:absolute before:left-0 before:top-0 before:inset-0 before:[clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)] before:overflow-hidden py-2 px-20">
          {/* Email */}
          <span className="text-white text-[16px] font-montserrat relative z-10">
            ottenthaler@vadaconte.de
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-white text-[16px] relative z-10">
            <a href="https://www.facebook.com/profile.php?id=61585777100973" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            {/* <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/ottenthalerkuechen
/" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            {/* <a href="#" className="hover:text-gray-300">
              <FaPinterestP />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
