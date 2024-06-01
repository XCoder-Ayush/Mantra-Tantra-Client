import React, { useEffect, useState } from 'react'
import RightNavigation from '../../components/RightNavigation/RightNavigation';
import Bottom from '../../components/Bottom/Bottom';
import Navbar from '../../components/Navbar/Navbar';
import './Testimonials.css';

const Testimonials = () => {
  const[testimonialArray,setTestimonialArray]=useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const testimonialResponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/testimonial`);
        
  
        if (!testimonialResponse.ok ) {
          throw new Error('Failed to fetch data');
        }
       
        const testimonialData = await testimonialResponse.json();
       console.log(testimonialData);
        setTestimonialArray(testimonialData.data);
       
      } catch (error) {
        throw new Error('Catch');
      }
    };
  fetchData();
  },[]);

  
  return (
    <div className='testimonials-div'>
    <div>
     <Navbar></Navbar>
    </div>
        
        <div className="faq-main-div editor">
    <div className= "testimonials-child1-div ">
        <p>Thanks to all of your encouraging emails, the inspiration to the Mantralekhan.com team is awesome. We regularly receive emails on how this website is being useful to satsangi users. Here’s some of the feedbacks that we received</p><br />
      <div>
        
      {testimonialArray.slice(0,9).map((user, index) => (
              <div key={index} className="user-card">
                <div className="user-info">
                 <p>
                  {user.data}
                 </p>
                </div>
             
              </div>
              
            ))}
      </div>
      </div>
            <div className= "faq-child2-div ">
           <RightNavigation/>
            </div>
        
        </div>
        <div className='testimonials-bottom'>
          <Bottom/>
        </div>
        </div>
    
  )
}

export default Testimonials