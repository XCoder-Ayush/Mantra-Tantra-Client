import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './MyPerformance.css';
import BarChart from './BarChart';
import Bottom from '../../components/Bottom/Bottom';

const MyPerformance = () => {

  const user_details = JSON.parse(localStorage.getItem('userdetails'));
  const [userMantraData, setUserMantraData] = useState(null);
  const [currentMonthGraphData, setCurrentMonthGraphData] = useState(null)
  const [previousMonthGraphData, setPreviousMonthGraphData] = useState(null)
  const [performanceData, setPerformanceData] = useState({
    fullName: 'Fetching...',
    todayMantralekhan: 'Fetching...',
    weekMantralekhan: 'Fetching...',
    totalMantralekhan: 'Fetching...'
  });
  const [currentDateTime, setCurrentDateTime] = useState(null);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchPerformanceData = async()=>{
      try {
        const response=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/performance/${userId}`,{
          credentials: 'include'
        })
        const performanceDataFetched= await response.json();
        // console.log(performanceDataFetched);
        setPerformanceData(performanceDataFetched.data)
      } catch (error) {
        throw new Error('Failed To Fetch User Data');
      }
    }
    const fetchData = async () => {
      try {

        const userMantraDataResponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/user/stats/${userId}`,{
          credentials: 'include'
        });

        if (!userMantraDataResponse.ok) {
          throw new Error('Failed To Fetch Mantralekhan Stats Of User.');
        }

        const userMantraStats = await userMantraDataResponse.json();
        // console.log(userMantraStats);
        setUserMantraData(userMantraStats);
      } catch (error) {
        throw new Error('Catch');
      }
    };

    fetchPerformanceData();
    fetchData();

  }, []);


  useEffect(() => {

    console.log(userMantraData);
   
    if(userMantraData){
      
      setCurrentMonthGraphData({
        labels: userMantraData.data.currentMonthMantralekhanDto?.map((data) => data.date),
        datasets: [{
          label: "This Month",
          data: userMantraData?.data.currentMonthMantralekhanDto?.map((data) => data.mantraCount),
          backgroundColor: [
            "#f3ba2f",
          ],
          borderColor: "white",
          borderWidth: 2,
        }]
      })
      
      setPreviousMonthGraphData({
        labels: userMantraData.data.previousMonthMantralekhanDto?.map((data) => data.date),
        datasets: [{
          label: "Previous Month",
          data: userMantraData?.data.previousMonthMantralekhanDto?.map((data) => data.mantraCount),
          backgroundColor: [
            "#f3ba2f",
          ],
          borderColor: "white",
          borderWidth: 2,
        }]
      })

    }
  }, [userMantraData])


  const getCurrentDateTime = () => {
    const now = new Date();
    setCurrentDateTime(now);
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='performance-main'>
      <Navbar></Navbar>
      <div className='middle'>
        <h2>My Performance</h2>
      </div>


      <div className="parent">

        <div className='child1'>
          <img src={user_details.avatar} alt="Profile" />
        </div>

        <div className='child2'>
          <p><strong>Name:</strong>  {performanceData.fullName}</p>
          <p><strong>Today's Mantralekhan:</strong> {performanceData.todayMantralekhan}</p>
          <p><strong>This Week's Mantralekhan:</strong> {performanceData.weekMantralekhan}</p>
          <p><strong>Total Mantralekhan:</strong> {user_details.mantraChanted}</p>
          <p><strong>Current Time:</strong> {currentDateTime && currentDateTime.toLocaleString()}</p>
        </div>

      </div>
      <div className='chartclass'>
        {currentMonthGraphData && <BarChart chartData={currentMonthGraphData} />}

      </div>      
      <div className="chartclass">
        {previousMonthGraphData && <BarChart chartData={previousMonthGraphData} />}
      </div>
      <div>
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default MyPerformance;