import React, { useState } from 'react'
import './Css/ManageOrders.css'

const initialOrders = [
  {
    id: 'ORD123',
    customer: 'Alice Smith',
    products: [
      { name: 'Rose Perfume', quantity: 2, price: 1200 },
      { name: 'Jasmine Mist', quantity: 1, price: 800 },
    ],
    status: 'Pending',
    date: '2025-05-20',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD124',
    customer: 'Bob Johnson',
    products: [
      { name: 'Citrus Splash', quantity: 3, price: 2100 },
    ],
    status: 'Shipped',
    date: '2025-05-19',
    paymentMethod: 'UPI',
  },
  {
    id: 'ORD125',
    customer: 'Carol Lee',
    products: [
      { name: 'Rose Perfume', quantity: 1, price: 600 },
      { name: 'Citrus Splash', quantity: 2, price: 1400 },
      { name: 'Jasmine Mist', quantity: 1, price: 800 },
    ],
    status: 'Delivered',
    date: '2025-05-18',
    paymentMethod: 'COD',
  },
];

const statusOptions = {
  Pending: ['Pending', 'Shipped', 'Cancel'],
  Shipped: ['Shipped', 'Delivered', 'Cancel'],
  Delivered: ['Delivered'],
  Cancel: ['Cancel'],
};

const ManageOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="manage-orders-container">
      <h2>Manage Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Products</th>
            <th>Payment</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => {
            const totalAmount = order.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
            return (
              <tr key={order.id}>
                <td>{idx + 1}</td>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <ul className="product-list">
                    {order.products.map((product, pidx) => (
                      <li key={pidx}>
                        <span className="product-name">{product.name}</span> ({product.price} &times; {product.quantity})
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{order.paymentMethod}</td>
                <td>₹{totalAmount}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </td>
                <td>
                  <select
                    className="status-dropdown"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    disabled={order.status === 'Delivered' || order.status === 'Cancel'}
                  >
                    {statusOptions[order.status].map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ManageOrders
