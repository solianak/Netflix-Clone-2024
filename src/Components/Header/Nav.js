import React, { useState, useEffect } from "react";
import "./Nav.css"; 
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav = () => {
  const [show, setShow] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
     return () => 
      window.removeEventListener("scroll", handleScroll);
   
  }, []);

  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src="" alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
