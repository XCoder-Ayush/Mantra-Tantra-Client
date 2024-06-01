import React, { useState,useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import RegisterModal from "../RegisterModal/RegisterModal";

function Navbar() {
  const [userData, setUserData] = useState(null);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
  const [click, setClick] = useState(false);
  
  const openModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const closeModalRegister = () => {
    setIsModalOpenRegister(false);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        axios.defaults.withCredentials = true;
        let response = await axios(`${process.env.REACT_APP_SERVER_URL}/api/v1/login/success`, {
          method: 'GET',
          withCredentials: true
        })

        setUserData(response.data.data);
        localStorage.setItem('userId', response.data.data.id);
        localStorage.setItem('userDetails',JSON.stringify(response.data.data));

        // console.log(JSON.parse(localStorage.getItem('userDetails')));

      } catch (error) {
        console.log("Error Fetching User Data:", error);
      }
    };

    getUserData();
  }, []);

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/logout`, {
        withCredentials: true,
      });
      
      setUserData(null); 

      window.location.href = "/login";
    } catch (error) {
      console.error("Error Logging Out : ", error);
    }
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo" exact="true">
            <span className="mb-4">Swaminarayan Mantralekhan</span>
           
            
          </NavLink>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {userData?(
              <>
          <li 
            exact="true"
            className="nav-item"
            >
              Jay Swaminarayan 
            </li>
           
        
            <li className="nav-item">
              <NavLink
                
                to="/topusers"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                exact="true"
              >
                Top Users
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                
                to="/mantrapage"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                exact="true"
              >
                Mantralekhan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/myperformance"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                exact="true"
              >
                My Performance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/editprofile"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                exact="true"
              >
               Edit Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/logout"
                activeclassname="active"
                className="nav-links"
                onClick={logout}
                exact="true"
              >
                Log Out
              </NavLink>
            </li>
            </>
           ) :(
           <>
            <li 
            exact="true"
            className="nav-links"
            >
              Welcome Guest
            </li>
            <li  onClick={openModalRegister} className="nav-links">
           Register
      
            </li>
          
            <li onClick={logout} className="nav-item">
              <NavLink
               
                to="/login"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
                exact="true"
              >
                Log In
              </NavLink>
            </li>
           </>
           )
           
}
          </ul>
          
          {isModalOpenRegister && <RegisterModal isModalOpenRegister={isModalOpenRegister} closeModalRegister={closeModalRegister}/>}

          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                 <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
               
                <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
            
        </div>
      </nav>
    </>
  );
}

export default Navbar