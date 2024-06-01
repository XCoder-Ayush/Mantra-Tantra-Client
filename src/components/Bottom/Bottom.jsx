
import React, { useState,useEffect } from 'react';
import './Bottom.css';
import FeedbackModal from './FeedbackModal';
import InviteAFriend from './InviteAFriend';

const Bottom = () => {
  const[userCount,setUserCount]=useState(0);
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
  const [isModalOpenFeedback, setIsModalOpenFeedback] = useState(false);
  
  const openModalFeedback = () => {
    setIsModalOpenFeedback(true);
  };

  const closeModalFeedback = () => {
    setIsModalOpenFeedback(false);
  };
  const [isModalOpenInvite, setIsModalOpenInvite] = useState(false);
  
  const openModalInvite = () => {
    setIsModalOpenInvite(true);
  };

  const closeModalInvite = () => {
    setIsModalOpenInvite(false);
  };
  return (
      <div className="bottom-parent">
       <div className='bottom-child1'>
        <p className='bottom-text'>Total <span>{mantraCount}</span> Mantralekhan
        By <span>{userCount}</span> Registered Users On This Site And Counting ...</p>
       </div>
       <div className='bottom-child2'>
        
        <button onClick={openModalFeedback}>Give Feedback</button>
        {isModalOpenFeedback && <FeedbackModal isModalOpenFeedback={isModalOpenFeedback} closeModalFeedback={closeModalFeedback}/>}
        <button onClick={openModalInvite}>Invite A Friend</button>{isModalOpenInvite && <InviteAFriend isModalOpenInvite={isModalOpenInvite} closeModalInvite={closeModalInvite}/>}
      
       </div> 
      </div>
  );
};

export default Bottom;
