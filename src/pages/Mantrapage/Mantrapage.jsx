import React, { useState } from 'react';
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar';
import image1 from '../../assets/Bhagwanji.png';
import './Mantrapage.css';
import Bottom from '../../components/Bottom/Bottom';

function Mantrapage() {
  
  const [word, setWord] = useState('');
  const [lines, setLines] = useState(Array(55).fill(''));
  const [wordCount, setWordCount] = useState(0);
  const [autoEnter, setAutoEnter] = useState(false);
  const wordPattern = "Swaminarayan";
  const user_id=localStorage.getItem('userId');
  console.log("user_id");
  console.log(user_id);
  const addCount = async () => {
    // const accessToken = Cookies.get('accessToken');
    // console.log(accessToken);
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/mantralekhan`,{id:localStorage.getItem('userId')},{ 
        withCredentials: true ,
        headers: {
          'Content-Type': 'application/json' 
        }
    });
  
     console.log("Count should be updated")
      console.log(response.data);
    } catch (error) {
      console.error('There was a problem with your Axios request:', error);
    }
  };
  const handleInputChange = async(e) => {
    const input = e.target.value.slice(0, 12); 
    const newWord = input
      .split('')
      .filter((char, index) => index < 12 && char === wordPattern[index])
      .join('');
    setWord(newWord);
    if (autoEnter && newWord === wordPattern) {
      addCount();
      addWordToLines();
    }
  };

  const handleEnterPress = async(e) => {
    if (!autoEnter && word === wordPattern) {
      addCount();
      addWordToLines();
      e.preventDefault(); // Prevent default action of Enter key
    }
  };

  const addWordToLines = () => {
    const newLines = [...lines];
    const lineIndex = newLines.findIndex(line => line === '');
    if (lineIndex !== -1) {
      newLines[lineIndex] = wordPattern;
      setLines(newLines);
      setWord('');
      setWordCount(wordCount + 1);
      if (lineIndex === 54) {
        setLines(Array(55).fill(''));
      }
    } else {
      setWord('');
    }
  };

  return (
    <div className='mantra-main'>
      <div>
        <Navbar />
      </div>
      <div className='main'>
        <img src={image1} alt='IMAGE' className='image' />
        <div className='sub_main'>
          <div className="box">
            <input
              type="text"
              value={word}
              onChange={handleInputChange}
              onKeyDown={(e) => { if (e.key === 'Enter') handleEnterPress(e); }}
              placeholder="Swaminarayan"
              className='mantrainput'
            />
          </div>
          <div className='count'>Total Count {wordCount} And Counting ...</div>
        </div>
        <label>
          <input
            type="checkbox"
            checked={autoEnter}
            onChange={() => setAutoEnter(!autoEnter)}
            className='enterCheckBox'
          />
          Skip Enter Key
        </label>
      </div>
      <div className="lines">
        {lines.map((line, index) => (
          <div key={index} className="line">
            {line}
          </div>
        ))}
      </div>
      <div className='mantra-bottom'>
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default Mantrapage;