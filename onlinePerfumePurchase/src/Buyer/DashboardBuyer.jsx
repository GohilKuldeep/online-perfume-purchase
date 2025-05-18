import React, { useState } from "react";
import "./Css/DashboardBuyer.css";
import AllProduct from "./BuyerCompoent/AllProduct";

const DashboardBuyer = () => {
  const [activeTab, setActiveTab] = useState("viewProduct");

  const renderContent = () => {
    switch (activeTab) {
      case "viewProduct":
        return <AllProduct />;
      case "manageProfile":
        return (
          <div>
            Manage Buyer Profile (Insert/Update/Delete) (to be implemented)
          </div>
        );
      case "searchProduct":
        return <div>Search Product (to be implemented)</div>;
      case "buyProduct":
        return <div>Buy Product (to be implemented)</div>;
      case "manageCart":
        return <div>Manage Cart (Insert/Delete) (to be implemented)</div>;
      case "payment":
        return <div>Payment (Online/Offline) (to be implemented)</div>;
      case "deliveryStatus":
        return <div>View Delivery Status (to be implemented)</div>;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
    alert("Logged out!");
  };

  return (
    <div className="dashboard-buyer">
      <nav className="navbar-buyer">
        <div className="navbar-left-buyer">
          <img
            src="/src/assets/favicon.png"
            alt="ScentCart Logo"
            className="buyer-logo"
          />
          <span className="navbar-title-buyer">ScentCart</span>
        </div>
        <ul className="navbar-menu-buyer">
          <li
            className={activeTab === "viewProduct" ? "active" : ""}
            onClick={() => setActiveTab("viewProduct")}
          >
            <span className="sidebar-label">All Products</span>
          </li>
          <li
            className={activeTab === "manageCart" ? "active" : ""}
            onClick={() => setActiveTab("manageCart")}
          >
            <span className="sidebar-label">My Cart</span>
          </li>
          <li
            className={activeTab === "payment" ? "active" : ""}
            onClick={() => setActiveTab("payment")}
          >
            <span className="sidebar-label">Checkout</span>
          </li>
          <li
            className={activeTab === "deliveryStatus" ? "active" : ""}
            onClick={() => setActiveTab("deliveryStatus")}
          >
            <span className="sidebar-label">Orders</span>
          </li>
          <li
            className={activeTab === "manageProfile" ? "active" : ""}
            onClick={() => setActiveTab("manageProfile")}
          >
            <span className="sidebar-label">Profile</span>
          </li>
            <button className="logout-btn-buyer" onClick={handleLogout}>
          <span className="sidebar-label">Logout</span>
        </button>
        </ul>
        
      </nav>
      <main className="main-content-buyer">   
        <div className="buyer-content">{renderContent()}</div>
      </main>
    </div>
  );
};

export default DashboardBuyer;
