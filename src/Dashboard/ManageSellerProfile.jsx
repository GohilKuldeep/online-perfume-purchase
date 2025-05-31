import React from 'react'
import './Css/ManageSellerProfile.css'

const sellers = [
  {
    id: 1,
    name: 'Olivia Perfumes',
    email: 'olivia@scent.com',
    phone: '+1 222 333 4444',
    address: '123 Aroma St, Fragrance City'
  },
  {
    id: 2,
    name: 'Elite Scents',
    email: 'elite@scents.com',
    phone: '+1 555 666 7777',
    address: '456 Blossom Ave, Perfume Town'
  }
]

const ManageSellerProfile = () => {
  return (
    <div className="seller-profile-container">
      <div className="seller-profile-list">
        {sellers.map(seller => (
          <div className="seller-profile-card view-card" key={seller.id}>
            <div className="seller-profile-avatar">{seller.name[0]}</div>
            <div className="seller-profile-details">
              <div className="seller-profile-name">{seller.name}</div>
              <div className="seller-profile-email">{seller.email}</div>
              <div className="seller-profile-phone">{seller.phone}</div>
              <div className="seller-profile-address">{seller.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageSellerProfile
