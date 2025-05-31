import React, { useState } from 'react'
import './Css/ManageAdminProfile.css'
import showIcon from '../assets/showIcon.svg'
import hideIcon from '../assets/hideIcon.svg'

const ManageAdminProfile = () => {
  const [profile, setProfile] = useState({
    email: 'admin@example.com',
    password: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add update logic here
    if (profile.newPassword !== profile.confirmPassword) {
      alert('New password and confirm password do not match!')
      return
    }
    alert('Profile updated!')
  }

  return (
    <div className="admin-profile-container">
      <div className="admin-profile-card align-card-center">
        <form className="admin-profile-form" onSubmit={handleSubmit}>
          <div className="admin-profile-field">
            <label>Email</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="admin-profile-field password-field">
            <label>Current Password</label>
            <input type={showPassword ? 'text' : 'password'} name="password" value={profile.password} onChange={handleChange} />
            <button type="button" className="toggle-password icon-btn" onClick={() => setShowPassword(v => !v)}>
              <img src={showPassword ? hideIcon : showIcon} alt={showPassword ? 'Hide' : 'Show'} />
            </button>
          </div>
          <div className="admin-profile-field password-field">
            <label>New Password</label>
            <input type={showNewPassword ? 'text' : 'password'} name="newPassword" value={profile.newPassword} onChange={handleChange} />
            <button type="button" className="toggle-password icon-btn" onClick={() => setShowNewPassword(v => !v)}>
              <img src={showNewPassword ? hideIcon : showIcon} alt={showNewPassword ? 'Hide' : 'Show'} />
            </button>
          </div>
          <div className="admin-profile-field password-field">
            <label>Confirm New Password</label>
            <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={profile.confirmPassword} onChange={handleChange} />
            <button type="button" className="toggle-password icon-btn" onClick={() => setShowConfirmPassword(v => !v)}>
              <img src={showConfirmPassword ? hideIcon : showIcon} alt={showConfirmPassword ? 'Hide' : 'Show'} />
            </button>
          </div>
          <button className="admin-update-btn" type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  )
}

export default ManageAdminProfile
