import React, { useEffect, useState } from 'react';
import './Homepage.css'; 
import Bottom from '../../components/Bottom/Bottom';
import Bhagwanji from '../../assets/Bhagwanji.png';
import Navbar from '../../components/Navbar/Navbar';
import FooterWithLinks from '../../components/FooterWithLinks/FooterWithLinks';
const Homepage = () => {

  const[userCount,setUserCount]=useState(0)
  const[mantraCount,setMantraCount]=useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/count`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setUserCount(data.data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/mantralekhan/count`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("mantra counts");
        console.log(data.data.count);
        setMantraCount(data.data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='home-main'>
      <div className='home-navbar'><Navbar/></div>
        
    <div className="homepage-container">
       
      <div className="image-container">
        <img src={Bhagwanji} alt="Your Image" className="homepage-image" />
      </div>
      <div className="text-container">
        
        <p> This is an endeavour to please Bhagwan Swaminarayan by typing “Swaminarayan” mahamantra online.</p>
        <br/>
        <p className='ltext'>Total <span>{mantraCount}</span> Mantralekhan
        By <span>{userCount}</span> Registered Users On This Site And Counting ...</p>
        <button className="homepage-button">Learn More</button>
      </div>
    
    </div>
    <div className='home-bottom'>
   <div >
    <FooterWithLinks/>
   </div>
   <div >
    <Bottom/>
   </div>
    </div>
    </div>
  );
};

export default Homepage;
