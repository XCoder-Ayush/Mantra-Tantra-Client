// FeedbackModal.js
import React, { useState } from 'react';
import './RegisterModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const RegisterModal = ({ isModalOpenRegister,closeModalRegister }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const[phone,setPhone]=useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', { fullName, email, password,address,selectedImage });
    setFullName('');
    setEmail('');
    setPassword('');
    setAddress('');
    setSelectedImage(null);
    closeModalRegister();
  };

  return (
   <div>
      
      <div className="modal-content">
        <div className="box">
        <button  className="modal-close is-large"
        aria-label="close"  onClick={closeModalRegister}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="title">Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Full Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
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
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Your feedback/comments"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></textarea>
              </div>
              
            </div>
            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Your feedback/comments"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></textarea>
              </div>
              
            </div>
            <div className='field'>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
      )}
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
        onClick={closeModalRegister}
      ></button>
    
    </div>
  );
};

export default RegisterModal;
