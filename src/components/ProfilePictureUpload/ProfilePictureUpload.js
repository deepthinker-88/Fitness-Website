import React, { useState } from "react";
import "./ProfilePictureUpload.css";

export default function ProfilePictureUpload() {
  const [profilePic, setProfilePic] = useState("");

  const [profileMessage, setProfileMessage] = useState("");
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [showInput, setShowInput] = useState(true);


  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
      setShowInput(false);
    }
  };

  const handleSavedProfilePictureButton = (e) => {
    alert("Profile Pic Saved Succesfully!!!");

    setProfileMessage("Profile Pic Saved");
    setTimeout(() => {
      setShowConfirmationMessage(false);
    }, 2000);
    setShowConfirmationMessage(true);
    
    

  };
  return (
    <div className="profile-upload-container">
      {!profilePic && <p className="profile--title">Upload Your Profile Pic Below</p>}
    
     
      {showInput &&
        <input
          className="image-selector"
          type="file"
          accept="image/*"
          onChange={handleProfilePicUpload}
        />
      }
      {profilePic && 
        <img
          src={profilePic}
          height="100"
          width="100"
          alt="preview-image"
          className="profile-preview"
        />
      }

      {profilePic && !profileMessage && 
        <button
          className="save-profile-pic-button"
          onClick={handleSavedProfilePictureButton}
        >
          Save Profile Picture
        </button>
      }
      {profileMessage && showConfirmationMessage && 
        <p className="confirmation--message">{profileMessage}</p>
      }


    </div>
  );
}
