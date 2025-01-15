// import { useState } from 'react';
// import Link from 'next/link';
// import classNames from 'classnames';

// const NavLink = ({ href, label, isMobile }) => (
//   <Link href={href}>
//     <span
//       className={classNames(
//         'hover:text-orange-600',
//         isMobile ? 'block text-gray-800 py-2' : 'text-black'
//       )}
//     >
//       {label}
//     </span>
//   </Link>
// );

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-transparent shadow-lg z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center text-black font-bold text-3xl">
//             Shakktii AI
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">
//             <NavLink href="/" label="HOME" />
//             <NavLink href="#about" label="CONTACT US" />
//             <NavLink href="#Experience" label="PAST EXPERIENCE"  />
//             <NavLink href="#services" label="SERVICES" />
//             <NavLink href="/history" label="HISTORY" />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="focus:outline-none "
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="w-6 h-6 text-black"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={classNames(
//           'md:hidden bg-black px-2 pt-2 pb-3 transition-all duration-300 ease-in-out',
//           { hidden: !isOpen }
//         )}
//       >
//         <NavLink href="/" label="HOME" isMobile />
//         <NavLink href="#about" label="CONTACT US" isMobile />
//         <NavLink href="#Experience" label="Past Experience" isMobile />
//         <NavLink href="#services" label="SERVICES" isMobile />
//         <NavLink href="/history" label="HISTORY" isMobile />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import Link from "next/link";
// import classNames from "classnames";

// const NavLink = ({ href, label, isMobile, onClick }) => (
//   <Link href={href}>
//     <span
//       onClick={onClick}
//       className={classNames(
//         "hover:text-orange-600 cursor-pointer",
//         isMobile ? "block text-gray-800 py-2" : "text-black"
//       )}
//     >
//       {label}
//     </span>
//   </Link>
// );

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isItem1Open, setIsToggleItem1Open] = useState(false);
//   const [isItem2Open, setIsToggleItem2Open] = useState(false);
//   const [isItem3Open, setIsToggleItem3Open] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);
//   const toggleItem1Menu = () => setIsToggleItem1Open(!isItem1Open);
//   const toggleItem2Menu = () => setIsToggleItem2Open(!isItem2Open);
//   const toggleItem3Menu = () => setIsToggleItem3Open(!isItem3Open);

//   return (
//     <nav className="bg-transparent shadow-lg z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center text-black font-bold text-3xl">
//             Shakktii AI
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <NavLink href="/" label="HOME" />
//             <NavLink href="#about" label="CONTACT US" />
//             <NavLink href="#Experience" label="PAST EXPERIENCE" />
//             {/* Services with Hover Dropdown */}
//             <div className="relative group">
//               <span className="cursor-pointer text-black hover:text-orange-600">
//               सेवा

//               </span>
//               <div className="absolute left-0  bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
//                 <div>
//                 <NavLink href="/services/item1" label="Item1" /></div>
//                <div> <NavLink href="/services/item2" label="Item2" /></div>
//                 <div><NavLink href="/services/item3" label="Item3" /></div>
//               </div>
//             </div>
//             <NavLink href="/history" label="HISTORY" />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="w-6 h-6 text-black"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={classNames(
//           "md:hidden bg-black px-2 pt-2 pb-3 transition-all duration-300 ease-in-out",
//           { hidden: !isOpen }
//         )}
//       >
//         <NavLink href="/" label="HOME" isMobile />
//         <NavLink href="#about" label="CONTACT US" isMobile />
//         <NavLink href="#Experience" label="PAST EXPERIENCE" isMobile />
//         {/* Services Dropdown */}
//         <div>
//           <span
//             className="block text-gray-800 py-2 cursor-pointer"
//             onClick={toggleServicesMenu}
//           >
//           सेवा

//           </span>
//           {isServicesOpen && (
//             <div className="pl-4 flex-col">
//               <NavLink href="/services/item1" label="Item1" isMobile />
//               <NavLink href="/services/item2" label="Item2" isMobile />
//               <NavLink href="/services/item3" label="Item3" isMobile />
//             </div>
//           )}
//         </div>
//         <NavLink href="/history" label="HISTORY" isMobile />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import Link from "next/link";
// import classNames from "classnames";

// const NavLink = ({ href, label, isMobile, onClick }) => (
//   <Link href={href}>
//     <span
//       onClick={onClick}
//       className={classNames(
//         "hover:text-orange-600 cursor-pointer",
//         isMobile ? "block text-gray-800 py-2" : "text-black"
//       )}
//     >
//       {label}
//     </span>
//   </Link>
// );

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isItem1Open, setIsItem1Open] = useState(false);
//   const [isItem2Open, setIsItem2Open] = useState(false);
//   const [isItem3Open, setIsItem3Open] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);
//   const toggleItem1Menu = () => setIsItem1Open(!isItem1Open);
//   const toggleItem2Menu = () => setIsItem2Open(!isItem2Open);
//   const toggleItem3Menu = () => setIsItem3Open(!isItem3Open);

//   return (
//     <nav className="bg-transparent shadow-lg z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center text-black font-bold text-3xl">
//             Shakktii AI
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <NavLink href="/" label="HOME" />
//             <NavLink href="#about" label="CONTACT US" />
//             <NavLink href="#Experience" label="PAST EXPERIENCE" />

//             {/* Services with Hover Dropdown */}
//             <div className="relative group">
//               <span className="cursor-pointer text-black hover:text-orange-600">
//               सेवा

//               </span>
//               <div className="absolute left-0 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
//                 <div>
//                   <NavLink href="/services/item1" label="Item1" />
//                   <div className="pl-4">
//                     <NavLink href="/services/item1/subitem1" label="Subitem 1" />
//                     <NavLink href="/services/item1/subitem2" label="Subitem 2" />
//                     <NavLink href="/services/item1/subitem3" label="Subitem 3" />
//                   </div>
//                 </div>
//                 <div>
//                   <NavLink href="/services/item2" label="Item2" />
//                   <div className="pl-4">
//                     <NavLink href="/services/item2/subitem1" label="Subitem 1" />
//                     <NavLink href="/services/item2/subitem2" label="Subitem 2" />
//                     <NavLink href="/services/item2/subitem3" label="Subitem 3" />
//                   </div>
//                 </div>
//                 <div>
//                   <NavLink href="/services/item3" label="Item3" />
//                   <div className="pl-4">
//                     <NavLink href="/services/item3/subitem1" label="Subitem 1" />
//                     <NavLink href="/services/item3/subitem2" label="Subitem 2" />
//                     <NavLink href="/services/item3/subitem3" label="Subitem 3" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <NavLink href="/history" label="HISTORY" />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="w-6 h-6 text-black"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={classNames(
//           "md:hidden bg-black px-2 pt-2 pb-3 transition-all duration-300 ease-in-out",
//           { hidden: !isOpen }
//         )}
//       >
//         <NavLink href="/" label="HOME" isMobile />
//         <NavLink href="#about" label="CONTACT US" isMobile />
//         <NavLink href="#Experience" label="PAST EXPERIENCE" isMobile />

//         {/* Services Dropdown */}
//         <div>
//           <span
//             className="block text-gray-800 py-2 cursor-pointer"
//             onClick={toggleServicesMenu}
//           >
//           सेवा

//           </span>
//           {isServicesOpen && (
//             <div className="pl-4 flex-col">
//               <span
//                 className="block text-gray-800 py-2 cursor-pointer"
//                 onClick={toggleItem1Menu}
//               >
//                 Item 1
//               </span>
//               {isItem1Open && (
//                 <div className="pl-4">
//                   <NavLink href="/services/item1/subitem1" label="Subitem 1" isMobile />
//                   <NavLink href="/services/item1/subitem2" label="Subitem 2" isMobile />
//                   <NavLink href="/services/item1/subitem3" label="Subitem 3" isMobile />
//                 </div>
//               )}

//               <span
//                 className="block text-gray-800 py-2 cursor-pointer"
//                 onClick={toggleItem2Menu}
//               >
//                 Item 2
//               </span>
//               {isItem2Open && (
//                 <div className="pl-4">
//                   <NavLink href="/services/item2/subitem1" label="Subitem 1" isMobile />
//                   <NavLink href="/services/item2/subitem2" label="Subitem 2" isMobile />
//                   <NavLink href="/services/item2/subitem3" label="Subitem 3" isMobile />
//                 </div>
//               )}

//               <span
//                 className="block text-gray-800 py-2 cursor-pointer"
//                 onClick={toggleItem3Menu}
//               >
//                 Item 3
//               </span>
//               {isItem3Open && (
//                 <div className="pl-4">
//                   <NavLink href="/services/item3/subitem1" label="Subitem 1" isMobile />
//                   <NavLink href="/services/item3/subitem2" label="Subitem 2" isMobile />
//                   <NavLink href="/services/item3/subitem3" label="Subitem 3" isMobile />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         <NavLink href="/history" label="HISTORY" isMobile />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState ,useEffect} from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

const NavLink = ({ href, label, isMobile, onClick }) => (
  <Link href={href}>
    <span
      onClick={onClick}
      className={classNames(
        "hover:text-orange-600 cursor-pointer",
        isMobile ? "block text-gray-800 py-2" : "text-black"
      )}
    >
      {label}
    </span>
  </Link>
);

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "user") {
      router.push("/login"); // Redirect to login if not a user
    }
  }, [router]);

  return (
    <nav className="bg-transparent shadow-lg z-10 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-black font-bold text-3xl">
          <img src="Logo.gif" className="w-14"/>
          </div>

      <h2 className="text-2xl"> Reception Management</h2>
          
          </div>
        </div>
     

      
    </nav>
  );
};

export default Navbar;
