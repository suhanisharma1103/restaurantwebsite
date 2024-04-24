import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID matching the URL hash
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <nav>
        <div className="logo">Suhani</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link to={`/#${element.link}`} key={element.id}>
                {element.title}
              </Link>
            ))}
            <Link to="/team">TEAM</Link>
            <Link to="/whoarewe">WHO ARE WE?</Link>
          </div>
          <Link to="/menu"><button className="menuBtn">OUR MENU</button></Link>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;