// import { useState } from 'react';

// export default function Navbar() {
//   const [activeNav, setActiveNav] = useState('PORTFOLIO');
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'HOME', href: '#home' },
//     { name: 'PORTFOLIO', href: '#portfolio' },
//     { name: 'SERVICES', href: '#services' },
//     { name: 'TEAM', href: '#team' },
//     { name: 'ABOUT', href: '#about' },
//     { name: 'BLOG', href: '#blog' },
//     { name: 'CONTACT US', href: '#contact' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200 py-3 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

//         {/* Left: Logo & Subtitle */}
//        {/* Left: Logo Image */}
// <div className="flex items-center">
//   <a href="#home">
//     <img
//       src="https://demoxml.com/html/onepager/images/logo.png"
//       alt="OnePager Logo"
//       className="h-10 lg:h-16 w-auto object-contain"
//     />
//   </a>
// </div>

//         {/* Right: Desktop Navigation Links */}
//         <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
//           {navItems.map((item) => {
//             const isActive = activeNav === item.name;
//             return (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setActiveNav(item.name)}
//                 className={`relative px-4 py-2 text-sm font-mono tracking-wider transition-colors duration-200 ${
//                   isActive ? 'text-white' : 'text-gray-800 hover:text-[#1fb5ad]'
//                 }`}
//               >
//                 <span className="relative z-10">{item.name}</span>
//                 {isActive && (
//                   <span className="absolute inset-0 bg-[#1fb5ad] -skew-x-12 z-0" />
//                 )}
//               </a>
//             );
//           })}
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-700 hover:text-[#1fb5ad] focus:outline-none p-2"
//           >
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 mt-2 px-4 py-3 space-y-2">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               onClick={() => {
//                 setActiveNav(item.name);
//                 setIsOpen(false);
//               }}
//               className={`block px-3 py-2 text-sm font-mono ${
//                 activeNav === item.name ? 'bg-[#1fb5ad] text-white' : 'text-gray-800'
//               }`}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

// 2nd try

// function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white py-4">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-8">

//         {/* Logo Image */}
//         <img
//           src="https://demoxml.com/html/onepager/images/logo.png"
//           alt="Onepager Logo"
//           className="w-auto h-12 lg:h-16"
//         />

//         {/* Menu */}
//         {/* <div className="flex gap-8 font-['Courier_New'] text-black">
//           <a href="#">HOME</a>
//           <a href="#">PORTFOLIO</a>
//           <a href="#">SERVICES</a>
//           <a href="#">TEAM</a>
//           <a href="#">ABOUT</a>
//           <a href="#">BLOG</a>
//           <a href="#">CONTACT US</a>
//         </div> */}

//        {/* Menu */}
// <div className="flex  font-['Courier_New'] text-black">
//   {[
//     "Home",
//     "Portfolio",
//     "Services",
//     "Team",
//     "About",
//     "Blog",
//     "Contact Us",
//   ].map((item) => (
//     <a
//       key={item}
//       href="#"
//       className="group relative inline-block px-3 py-2 text-black uppercase"
//     >
//       {/* Tilted Box */}
//       <span className="absolute inset-0 bg-[#2BBBC0] opacity-0 transition-opacity duration-200 group-hover:opacity-100 skew-x-[-22deg]"></span>

//       {/* Text */}
//       <span className="relative z-10 group-hover:text-white">
//         {item}
//       </span>
//     </a>
//   ))}
// </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// 3rd try

// import { useState } from "react";

// function Navbar() {
//   const [activeItem, setActiveItem] = useState("Home");

//   const menuItems = [
//     "Home",
//     "Portfolio",
//     "Services",
//     "Team",
//     "About",
//     "Blog",
//     "Contact Us",
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white py-4">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-8">

//         {/* Logo */}
//         <img
//           src="https://demoxml.com/html/onepager/images/logo.png"
//           alt="Onepager Logo"
//           className="w-auto h-12 lg:h-16"
//         />

//         {/* Menu */}
//         <div className="flex gap-1 font-['Courier_New']">
//           {menuItems.map((item) => (
//             <a
//               key={item}
//               href="#"
//               onClick={() => setActiveItem(item)}
//               className="group relative inline-block px-3 py-2 uppercase"
//             >
//               {/* Tilted Box */}
//               <span
//                 className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
//                   activeItem === item
//                     ? "opacity-100"
//                     : "opacity-0 group-hover:opacity-100"
//                 }`}
//               ></span>

//               {/* Text */}
//               <span
//                 className={`relative z-10 ${
//                   activeItem === item
//                     ? "text-white"
//                     : "text-black group-hover:text-white"
//                 }`}
//               >
//                 {item}
//               </span>
//             </a>
//           ))}
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// mari practice

// import { useState, } from "react";
// import { useState, useEffect } from "react";

// function Navbar() {
//   const [activeItem, setActiveItem] = useState("Home");

//   const menuItems = [
//     "Home",
//     "Portfolio",
//     "Services",
//     "Team",
//     "About",
//     "Blog",
//     "Contact Us",
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full  bg-white py-4 border-b border-gray-200">
//       {/* <div className="max-w-6xl  mx-auto flex items-center justify-between px-8"> */}
//       <div className="mx-auto flex w-full items-center justify-between px-8 lg:px-6">
//         <img
//           src="https://demoxml.com/html/onepager/images/logo.png"
//           alt="Onepager Logo"
//           className="w-auto h-12 lg:h-17"
//         />

//         {/* <div className="flex gap-1 font-['Courier_New'] "> */}
//         <div className="flex items-center gap-6 font-['Courier_New']">
//           {menuItems.map((item) => (
//             <a
//               href="#"
//               key={item}
//               onClick={() => setActiveItem(item)}
//               className="group relative inline-block px-3 py-3 uppercase"
//             >
//               <span
//                 className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
//                   activeItem === item
//                     ? "opacity-100"
//                     : "opacity-0 group-hover:opacity-100"
//                 }`}
//               ></span>

//               <span
//                 className={`relative z-10 text-[18px] ${
//                   activeItem === item
//                     ? "text-white"
//                     : "text-black group-hover:text-white"
//                 }`}
//               >
//                 {item}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;

// import { useState, useEffect } from "react";

// function Navbar() {
//   const [activeItem, setActiveItem] = useState("Home");

//   const menuItems = [
//     { name: "Home", id: "home" },
//     { name: "Portfolio", id: "portfolio" },
//     { name: "Services", id: "services" },
//     { name: "Team", id: "team" },
//     { name: "About", id: "about" },
//     { name: "Blog", id: "blog" },
//     { name: "Contact Us", id: "contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 120;

//       menuItems.forEach((item) => {
//         // Contact Us ko skip karna hai
//         if (item.id === "contact") return;

//         const section = document.getElementById(item.id);

//         if (
//           section &&
//           scrollPosition >= section.offsetTop &&
//           scrollPosition < section.offsetTop + section.offsetHeight
//         ) {
//           setActiveItem(item.name);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 w-full  bg-white py-4 border-b border-gray-200">
//       {/* <div className="max-w-6xl  mx-auto flex items-center justify-between px-8"> */}
//       <div className="mx-auto flex w-full items-center justify-between px-8 lg:px-6">
//         <img
//           src="https://demoxml.com/html/onepager/images/logo.png"
//           alt="Onepager Logo"
//           className="w-auto h-12 lg:h-17"
//         />

//         {/* <div className="flex gap-1 font-['Courier_New'] "> */}
//         <div className="flex items-center gap-6 font-['Courier_New']">
//           {menuItems.map((item) => (
//             <a
//               href={`#${item.id}`}
//               key={item}
//               onClick={(e) => {
//                 e.preventDefault();

//                 const section = document.getElementById(item.id);

//                 if (section) {
//                   section.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                 }

//                 setActiveItem(item.name);
//               }}
//               className="group relative inline-block px-3 py-3 uppercase"
//             >
//               <span
//                 className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
//                   activeItem === item
//                     ? "opacity-100"
//                     : "opacity-0 group-hover:opacity-100"
//                 }`}
//               ></span>

//               <span
//                 className={`relative z-10 text-[18px] ${
//                   activeItem === item
//                     ? "text-white"
//                     : "text-black group-hover:text-white"
//                 }`}
//               >
//                 {item}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;

// import { useState, useEffect } from "react";

// function Navbar() {
//   const [activeItem, setActiveItem] = useState("Home");

//   const menuItems = [
//     { name: "Home", id: "home" },
//     { name: "Portfolio", id: "portfolio" },
//     { name: "Services", id: "services" },
//     { name: "Team", id: "team" },
//     { name: "About", id: "about" },
//     { name: "Blog", id: "blog" },
//     { name: "Contact Us", id: "contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 120;

//       menuItems.forEach((item) => {
//         // Contact Us ko active na karna
//         if (item.id === "contact") return;

//         const section = document.getElementById(item.id);

//         if (
//           section &&
//           scrollPosition >= section.offsetTop &&
//           scrollPosition < section.offsetTop + section.offsetHeight
//         ) {
//           setActiveItem(item.name);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, );

//   return (
//     // <nav className="sticky top-0 z-50 w-full bg-white py-4 border-b border-gray-200">
//     <nav className="sticky top-0 z-50 w-full bg-white/94 py-4 border-b border-gray-200">
//       <div className="mx-auto flex w-full items-center justify-between px-8 lg:px-6">
//         <img
//           src="https://demoxml.com/html/onepager/images/logo.png"
//           alt="Onepager Logo"
//           className="w-auto h-12 lg:h-17"
//         />

//         <div className="flex items-center gap-6 font-['Courier_New']">
//           {menuItems.map((item) => (
//             <a
//               key={item.name}
//               href={`#${item.id}`}
//               onClick={(e) => {
//                 e.preventDefault();

//                 const section = document.getElementById(item.id);

//                 if (section) {
//                   section.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                 }

//                 setActiveItem(item.name);
//               }}
//               className="group relative inline-block px-3 py-3 uppercase"
//             >
//               <span
//                 className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
//                   activeItem === item.name
//                     ? "opacity-100"
//                     : "opacity-0 group-hover:opacity-100"
//                 }`}
//               ></span>

//               <span
//                 className={`relative z-10 text-[18px] ${
//                   activeItem === item.name
//                     ? "text-white"
//                     : "text-black group-hover:text-white"
//                 }`}
//               >
//                 {item.name}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "About", id: "about" },
    { name: "Blog", id: "blog" },
    { name: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      menuItems.forEach((item) => {
        // Contact Us ko active na karna
        if (item.id === "contact") return;

        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveItem(item.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, );

  return (
    // <nav className="sticky top-0 z-50 w-full bg-white py-4 border-b border-gray-200">
    <nav className="sticky top-0 z-50 w-full bg-white/94 py-4 border-b border-gray-200">
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-6 xl:px-8">
        <img
          src="https://demoxml.com/html/onepager/images/logo.png"
          alt="Onepager Logo"
          className="w-auto h-9 md:h-12 xl:h-17"
        />

        {/* 'md:flex' lagaya taake 150% zoom aur laptop screens par menu direct navbar par dikhe (3 lines par clik na karna pare) */}
        {/* gap aur padding ko responsive rakha (md:gap-2, xl:gap-6) taake zoomed mode par sab kuch ek line me adjust ho jaye */}
        <div className="hidden md:flex items-center gap-1.5 md:gap-2 lg:gap-4 xl:gap-6 font-['Courier_New']">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();

                const section = document.getElementById(item.id);

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }

                setActiveItem(item.name);
              }}
              className="group relative inline-block px-1.5 md:px-2 lg:px-3 py-2 xl:py-3 uppercase"
            >
              <span
                className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
                  activeItem === item.name
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>

              {/* font size zoom aur monitor space ke hisab se dynamically scale hota hai taake sare items fit aa jayen */}
              <span
                className={`relative z-10 text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-['Courier_New'] ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-black group-hover:text-white"
                }`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Hamburger icon strictly chotay mobile screens (under 768px) ke liye */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile only Dropdown (for phones) */}
      {isOpen && (
        <div className="flex flex-col items-center gap-2 py-4 font-['Courier_New'] md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();

                const section = document.getElementById(item.id);

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }

                setActiveItem(item.name);
                setIsOpen(false);
              }}
              className="group relative inline-block px-3 py-3 uppercase"
            >
              <span
                className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
                  activeItem === item.name
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>

              <span
                className={`relative z-10 text-[18px] ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-black group-hover:text-white"
                }`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
