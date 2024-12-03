// import React, { useState } from "react";
// import logo from "../../assets/hero/logo.png";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar__container container">

//         <ul className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}>
//           {["Services", "Solutions", "Contact"].map((item) => (
//             <li key={item}>
//               <a href={`#${item.toLowerCase()}`} onClick={closeMobileMenu}>
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="navbar__logo">
//           <img src={logo} alt="Logo" />
//         </div>

//         <div className="navbar__hamburger" onClick={toggleMobileMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
