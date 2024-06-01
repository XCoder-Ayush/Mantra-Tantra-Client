import React, { useState, useEffect } from "react";
import "./Bottom.css";
import FeedbackModal from "./FeedbackModal";
import InviteAFriend from "./InviteAFriend";
import axios from "axios";

const Bottom = () => {
  const [userCount, setUserCount] = useState(0);
  const [mantraCount, setMantraCount] = useState(0);
  const [isModalOpenFeedback, setIsModalOpenFeedback] = useState(false);
  const [isModalOpenInvite, setIsModalOpenInvite] = useState(false);
  const [userData, setUserData] = useState(null);
  const apiUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const getUserData = async () => {
      try {
        axios.defaults.withCredentials = true;
        let response = await axios(`${apiUrl}/api/v1/login/success`, {
          method: "GET",
          withCredentials: true,
        });

        setUserData(response.data.data);
      } catch (error) {}
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/v1/user/count`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setUserCount(data.data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/v1/mantralekhan/count`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMantraCount(data.data.count);
      } catch (error) {
        console.error("Error fetching mantralekhan count:", error);
      }
    };

    getUserData();

    fetchData();
  }, []);

  const openModalFeedback = () => {
    setIsModalOpenFeedback(true);
  };

  const closeModalFeedback = () => {
    setIsModalOpenFeedback(false);
  };

  const openModalInvite = () => {
    setIsModalOpenInvite(true);
  };

  const closeModalInvite = () => {
    setIsModalOpenInvite(false);
  };

  return (
    <div className="bottom-parent">
      <div className="bottom-child1">
        <p className="bottom-text">
          Total <span>{mantraCount}</span> Mantralekhan By{" "}
          <span>{userCount}</span> Registered Users On This Site And Counting
          ...
        </p>
      </div>
      {userData ? (
        <div className="bottom-child2">
          <button onClick={openModalFeedback}>Give Feedback</button>
          {isModalOpenFeedback && (
            <FeedbackModal
              isModalOpenFeedback={isModalOpenFeedback}
              closeModalFeedback={closeModalFeedback}
            />
          )}
          <button onClick={openModalInvite}>Invite A Friend</button>
          {isModalOpenInvite && (
            <InviteAFriend
              isModalOpenInvite={isModalOpenInvite}
              closeModalInvite={closeModalInvite}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Bottom;
