import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaUtensilSpoon,
  FaYoutube,
} from "react-icons/fa";
import { AppLogo } from "../AppLogo";
// import { Instagram, Twitter, Youtube, UtensilsCrossed } from "lucide-react";

// Data structure for the footer links
const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <a
        key={index}
        className="text-sm text-gray-600 hover:text-red-600 transition duration-150"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    ));

    return (
      <div className="flex flex-col space-y-3" key={group.title}>
        <div className="text-lg font-semibold text-gray-800 mb-2">
          {group.title}
        </div>
        {links}
      </div>
    );
  });

  // Custom Logo Component based on previous application styles

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-4 py-12">
        {/* Logo and Description Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          <AppLogo />
          <p className="text-sm text-gray-500 max-w-xs">
            Explore a world of authentic, user-submitted recipes. Cooking made
            easy and fun!
          </p>
        </div>

        {/* Link Groups Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">{groups}</div>
      </div>

      {/* Footer Bottom Bar (After Footer) */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-4 pt-4 pb-6 flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-gray-500">
          © 2022 Recipe Realm. All rights reserved.
        </p>

        {/* Social Icons Group */}
        <div className="flex space-x-3">
          <a
            href="#"
            aria-label="Follow on Twitter"
            className="p-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-gray-100 transition duration-150"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Follow on YouTube"
            className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition duration-150"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            aria-label="Follow on Instagram"
            className="p-2 rounded-full text-gray-500 hover:text-pink-600 hover:bg-gray-100 transition duration-150"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
