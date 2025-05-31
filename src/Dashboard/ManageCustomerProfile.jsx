import React from 'react'
import './Css/ManageCustomerProfile.css'

const profiles = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '+1 987 654 3210',
    address: '456 Main St, City, Country'
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'johnsmith@example.com',
    phone: '+1 555 123 4567',
    address: '789 Oak Ave, City, Country'
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'johnsmith@example.com',
    phone: '+1 555 123 4567',
    address: '789 Oak Ave, City, Country'
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'johnsmith@example.com',
    phone: '+1 555 123 4567',
    address: '789 Oak Ave, City, Country'
  }
]

const ManageCustomerProfile = () => {
  return (
    <div>
      <div className="customer-profile-list">
        {profiles.map(profile => (
          <div className="customer-profile-card view-card" key={profile.id}>
            <div className="customer-profile-avatar">{profile.name[0]}</div>
            <div className="customer-profile-details">
              <div className="customer-profile-name">{profile.name}</div>
              <div className="customer-profile-email">{profile.email}</div>
              <div className="customer-profile-phone">{profile.phone}</div>
              <div className="customer-profile-address">{profile.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageCustomerProfile
