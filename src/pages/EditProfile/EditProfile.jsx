import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from '../../assets/download.png';
import './EditProfile.css';
import Navbar from '../../components/Navbar/Navbar';
import Bottom from '../../components/Bottom/Bottom';

const EditProfile = () => {
  const user_details = JSON.parse(localStorage.getItem('userdetails'));
  const [fullName, setFullName] = useState(user_details.fullName);
  const [email, setEmail] = useState(user_details.email);
  const [address, setAddress] = useState(user_details.address);
  const [phone, setPhone] = useState(user_details.phone); // Corrected typo here
  const [timeZone, setTimeZone] = useState('IST');
  const [currentTime, setCurrentTime] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [pic, setPic] = useState();


  useEffect(() => {
    
    updateCurrentTime();
  }, [timeZone]);

  const updateCurrentTime = () => {
    const options = {
      timeZone: timeZone,
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric', 
      hour12: false, 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const timeString = formatter.format(new Date());
    setCurrentTime(timeString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userId = localStorage.getItem('userId');
  
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: userId,
        niyam: 0,
        fullName: fullName,
        address: address,
        phone: phone,
      }),
    };
  
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/update`, requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  
    console.log('Form submitted:', { fullName, email, address, phone, timeZone });
  
    setFullName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };
  
  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
  
    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match');
      return;
    }
  
    const userId = localStorage.getItem('userId');
  
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: userId,
        email: email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    };
  
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/change-password`, requestOptions);
      const data = await response.json();
      console.log("password change response");
      console.log(data);
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPic(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSubmitImage = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('avatar', pic);
  //   formData.append('id', user_details.id);
  //   console.log(pic);
  //   try {
  //     const response = await fetch('${}/api/v1/user/profile-picture', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const responseData = await response.json();
  //     console.log("image update response");
  //     console.log(responseData);
  //   } catch (error) {
  //     console.error('Error updating avatar:', error);
  //   }
  // };
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    const formData = new FormData();
    formData.append('id', userId);
    formData.append('avatar', selectedFile);

    try {
      const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/profile-picture`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, 
      });
      console.log('File Uploaded Successfully : ', response.data);
      //Update User In Local Storage
      const user = await axios(`${process.env.REACT_APP_SERVER_URL}/login/success`, {
        method: 'GET',
        withCredentials: true
      })

    } catch (error) {
      console.error('Error Updating Profile Picture.', error);
    }
  };
  return (
    <div className='edit-main'>
        <div>
            <Navbar/>
        </div>
    <div className='edit'>
      <div className='edit-image'>
        {user_details.avatar ? (
          <img src={user_details.avatar} alt="User Avatar" />
        ) : (
          <img src={defaultImage} alt="Default Avatar" />
        )}
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} /> <br />
          <button type="submit" onClick={handleImageSubmit}>Save</button>
        </div>
      </div>
      <div className='edit-user-details'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name:</label> <br />
            <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required disabled/>
          </div>
          <div>
            <label htmlFor="email">Email:</label> <br />
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled/>
          </div>
          <div>
            <label htmlFor="address">Address:</label> <br />
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label> <br />
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          {/* <div>
            <label htmlFor="timeZone">Time Zone:</label> <br />
            <select id="timeZone" value={timeZone} onChange={(e) => setTimeZone(e.target.value)} required>
              {timeZones.map((zone) => (
                <option key={zone.value} value={zone.value}>{zone.label}</option>
              ))}
            </select>
          </div> */}
          <div>
            <p>Current Time : {currentTime}</p>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
      <div className='edit-change-password'>
        <h2>Change Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <div>
            <label>Old Password:</label> <br />
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>New Password:</label> <br />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label> <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
    <div>
        <Bottom/>
    </div>
    </div>
  );
};

export default EditProfile;
