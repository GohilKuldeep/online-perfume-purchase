import React, { useState } from 'react'
import './Css/ManageProfile.css'

const ManageProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  })

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add update logic here
    alert('Profile updated!')
  }

  return (
    <div className="profileContainer">
      <div className="profile-card">
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="profile-field">
            <label>Name</label>
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="profile-field">
            <label>Email</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="profile-field">
            <label>Phone</label>
            <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
          </div>
          <button className="update-btn" type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  )
}

export default ManageProfile
