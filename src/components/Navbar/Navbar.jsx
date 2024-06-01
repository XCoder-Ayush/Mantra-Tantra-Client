import React, { useState,useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import RegisterModal from "../RegisterModal/RegisterModal";
function Navbar() {
  const [userData, setUserData] = useState(null);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
  
  const openModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const closeModalRegister = () => {
    setIsModalOpenRegister(false);
  };
  useEffect(() => {
    const getUserData = async () => {
      // const accessToken = Cookies.get('connect.sid');
      console.log("Navbar Hai")
      // console.log(accessToken);
      try {
        axios.defaults.withCredentials = true;
        let response = await axios(`${process.env.REACT_APP_SERVER_URL}/login/success`, {
          method: 'GET',
          withCredentials: true
        })
        console.log("user ka details");
        console.log(response.data);
        setUserData(response.data);
        localStorage.setItem('userId', response.data.id);
        localStorage.setItem('userdetails',JSON.stringify(response.data));
        console.log(JSON.parse(localStorage.getItem('userdetails')));
        // console.log("response.data.user.id");
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    console.log("User Data Updated:", userData);
  }, [userData]);
  useEffect(() => {
    console.log("Checkimg user data:", userData);
  }, [userData]);
  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/logout`, {
        withCredentials: true,
      });
      
      setUserData(null); // Clear user data after logout
     
      window.location.href = "/login";
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  const [click, setClick] = useState(false);

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
               
                to="/logout"
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