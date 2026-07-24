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

import { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    "Home",
    "Portfolio",
    "Services",
    "Team",
    "About",
    "Blog",
    "Contact Us",
  ];
  return (
    <nav className="sticky top-0 z-50 w-full  bg-white py-4">
      <div className="max-w-6xl  mx-auto flex items-center justify-between px-8">
        <img
          src="https://demoxml.com/html/onepager/images/logo.png"
          alt="Onepager Logo"
          className="w-auto h-12 lg:h-16"
        />

        <div className="flex gap-1 font-['Courier_New']">
          {menuItems.map((item) => (
            <a
              href="#"
              key={item}
              onClick={() => setActiveItem(item)}
              className="group relative inline-block px-3 py-3 uppercase"
            >
              <span
                className={`absolute inset-0 bg-[#2BBBC0] skew-x-[-20deg] ${
                  activeItem === item
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>

              <span
                className={`relative z-10 ${
                  activeItem === item
                    ? "text-white"
                    : "text-black group-hover:text-white"
                }`}
              >
                {item}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
