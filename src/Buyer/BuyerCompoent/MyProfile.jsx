import React, { useState } from 'react'
import "./css/MyProfile.css";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    password: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    alert("Profile updated!");
  };

  return (
    <div className="profile-outer-container">
      <div className="myProfile-card">
        <div className="profile-avatar-section">
          <img
            src={"/src/assets/fav.png"}
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <div>
            <h2 className="profile-title">My Profile</h2>
            <div className="profile-email">{profile.email || "your@email.com"}</div>
          </div>
        </div>
        <form className="profile-form" onSubmit={handleSave} autoComplete="off">
          <div className="profile-section">
            <h3 className="profile-section-title">Personal Info</h3>
            <div className="profile-row-grid">
              <div className="profile-row">
                <label>Name</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} disabled={!editMode} required />
              </div>
              <div className="profile-row">
                <label>Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleChange} disabled={!editMode} required />
              </div>
            </div>
            <div className="profile-row">
              <label>Address</label>
              <input type="text" name="address" value={profile.address} onChange={handleChange} disabled={!editMode} />
            </div>
            <div className="profile-row-grid">
              <div className="profile-row">
                <label>City</label>
                <input type="text" name="city" value={profile.city} onChange={handleChange} disabled={!editMode} />
              </div>
              <div className="profile-row">
                <label>State</label>
                <input type="text" name="state" value={profile.state} onChange={handleChange} disabled={!editMode} />
              </div>
              <div className="profile-row">
                <label>Zip Code</label>
                <input type="text" name="zip" value={profile.zip} onChange={handleChange} disabled={!editMode} />
              </div>
            </div>
            <div className="profile-actions">
              {editMode ? (
                <>
                  <button type="submit" className="profile-save-btn">Save</button>
                  <button type="button" className="profile-cancel-btn" onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button type="button" className="profile-edit-btn" onClick={handleEdit}>Edit Profile</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyProfile
