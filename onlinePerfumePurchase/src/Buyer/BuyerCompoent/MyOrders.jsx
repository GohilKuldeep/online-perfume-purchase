import React, { useState } from 'react'
import "./css/MyOrders.css";

// Sample order data (replace with API data in real app)
const initialOrders = [
  {
    o_id: 1,
    products: [
      {
        name: "Dior Sauvage",
        brand: "Dior",
        image: "https://via.placeholder.com/100x100?text=Dior",
        quantity: 1,
        price: 4500,
      },
      {
        name: "Chanel Bleu",
        brand: "Chanel",
        image: "https://via.placeholder.com/100x100?text=Chanel",
        quantity: 2,
        price: 2500,
      },
    ],
    status: "Processing",
    payment: {
      method: "Online",
      amount: 9500,
    },
    date: "2025-05-15",
  },
  {
    o_id: 2,
    products: [
      {
        name: "Gucci Bloom",
        brand: "Gucci",
        image: "https://via.placeholder.com/100x100?text=Gucci",
        quantity: 2,
        price: 3800,
      }
    ],
    status: "Delivered",
    payment: {
      method: "COD",
      amount: 7600,
    },
    date: "2025-05-10",
  },
];

const MyOrders = () => {
  const [orders] = useState(initialOrders);

  const handleCancelOrder = (orderId) => {
    // You can add API call here
    alert(`Order #${orderId} cancelled!`);
    // Optionally, update state to remove/cancel the order
  };

  return (
    <div>
      <h2 className="orders-title">📦 My Orders</h2>
      {orders.length === 0 ? (
        <div className="orders-empty">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="No Orders" style={{width:60,marginBottom:10,opacity:0.7}}/>
          <div>You have not placed any orders yet.</div>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div className="order-card" key={order.o_id} style={{border:'1px solid #ddd', borderRadius:8, marginBottom:24, padding:16, background:'#fff', boxShadow:'0 2px 8px #f0f0f0'}}>
              <div className="order-products-table" style={{width:'100%', marginBottom:12}}>
                <div className="orders-list-header" style={{display:'flex', fontWeight:'bold', borderBottom:'1px solid #eee', paddingBottom:6}}>
                  <span style={{flex:2}}>Product</span>
                  <span style={{flex:1}}>Brand</span>
                  <span style={{flex:1}}>Quantity</span>
                  <span style={{flex:1}}>Price</span> {/* Added Price column */}
                </div>
                {order.products.map((product, idx) => (
                  <div
                    className="orders-item"
                    key={order.o_id + '-' + idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: idx === order.products.length - 1 ? 'none' : '1px solid #f5f5f5',
                      padding: '16px 0', // Increased vertical padding for more gap
                      marginBottom: idx === order.products.length - 1 ? 0 : 8 // Add margin between products
                    }}
                  >
                    <div className="orders-item-product" style={{flex:2, display:'flex', alignItems:'center'}}>
                      <img src={product.image} alt={product.name} className="orders-item-image" style={{width:40, height:40, objectFit:'cover', borderRadius:4, marginRight:10}} />
                      <div className="orders-item-name">{product.name}</div>
                    </div>
                    <div className="orders-item-brand" style={{flex:1}}>{product.brand}</div>
                    <div className="orders-item-qty" style={{flex:1}}>{product.quantity}</div>
                    <div className="orders-item-price" style={{flex:1}}>
                      {product.price ? `₹${product.price * product.quantity}` : <span style={{color:'#aaa'}}>N/A</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-summary" style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'#fafbfc', borderRadius:6, padding:'10px 16px', fontSize:15}}>
                <div><b>Status:</b> <span className={`orders-item-status status-${order.status.toLowerCase()}`}>{order.status}</span></div>
                <div><b>Payment:</b> {order.payment.method}</div>
                <div><b>Date:</b> {order.date}</div>
                <div><b>Amount:</b> <span style={{color:'#1a8917'}}>₹{order.payment.amount}</span></div>
                {order.status === 'Processing' && (
                  <button
                    className="cancel-order-btn"
                    style={{marginLeft:16, padding:'6px 16px', background:'#ff4d4f', color:'#fff', border:'none', borderRadius:4, cursor:'pointer'}}
                    onClick={() => handleCancelOrder(order.o_id)}
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyOrders
