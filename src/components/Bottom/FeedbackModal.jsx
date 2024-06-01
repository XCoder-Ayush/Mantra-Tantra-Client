// FeedbackModal.js
import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const FeedbackModal = ({ isModalOpenFeedback,closeModalFeedback }) => {
  const user_details = JSON.parse(localStorage.getItem('userdetails'));
  const [fullName, setFullName] = useState(user_details.fullName);
  const [email, setEmail] = useState(user_details.email);
  const [comments, setComments] = useState('');
  const formData = {
    id: localStorage.getItem('userId'),
    fullName: fullName,
    email: email,
    comment: comments
  };
  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/feedback`,{id:localStorage.getItem('userId'),email:formData.email,
      fullName:formData.fullName,
      comment:formData.fullName},{ withCredentials: true ,headers: {
        'Content-Type': 'application/json' 
      }
    })
    console.log(response)
  }
    catch (error) {
  
      console.error('Error submitting feedback:', error);
     
    }
  
    setFullName('');
    setEmail('');
    setComments('');
    closeModalFeedback();
  };

  return (
   <div>
      
      <div className="modal-content">
        <div className="box">
        <button  className="modal-close is-large"
        aria-label="close"  onClick={closeModalFeedback}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="title">Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Comments</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Your feedback/comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModalFeedback}
      ></button>
    
    </div>
  );
};

export default FeedbackModal;
