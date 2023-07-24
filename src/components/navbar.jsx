import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="nav">
        <a href="#" className="brand"></a>
        <ul className="nav__menu">
          <il className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </il>
          <il className="nav__item">
            <a href="#" className="nav__link">
              Acerca de
            </a>
          </il>
        </ul>
        <div className="nav__toggler">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
