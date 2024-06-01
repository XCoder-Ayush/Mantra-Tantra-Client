import React, { useState } from "react";
import axios from "axios";
import "./FeedbackModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const InviteAFriend = ({ isModalOpenInvite, closeModalInvite }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const formData = {
    id: localStorage.getItem("userId"),
    fullName: fullName,
    email: email,
    comment: comments,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(formData);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/user/invite`,
        {
          id: formData.id,
          email: formData.email,
          name: formData.fullName,
          comments: formData.comment,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } catch (error) {
      console.error("Error Inviting Friend", error);
    }
    setFullName("");
    setEmail("");
    setComments("");
    closeModalInvite();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 ">
      <div className="modal-background" onClick={closeModalInvite}></div>
      <div className="modal-content">
        <div className="box">
          <button
            className="modal-close"
            aria-label="close"
            onClick={closeModalInvite}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="title">Invite A Friend</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Friend's Name"
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
                  placeholder="Friend's Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                <button type="submit" className="button is-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModalInvite}
      ></button>
    </div>
  );
};

export default InviteAFriend;
