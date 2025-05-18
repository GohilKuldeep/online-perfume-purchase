import React, { useState } from "react";
import "../Css/Dashboard.css";
import {
  FaEye,
  FaEdit,
  FaUserCog,
  FaUsers,
  FaStore,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardAdmin = () => {
  const [activeTab, setActiveTab] = useState("viewProduct");

  const renderContent = () => {
    switch (activeTab) {
      case "manageProduct":
        return <div>Manage Product (Add/Remove) (to be implemented)</div>;
      case "viewProduct":
        return <div>View All Product Information (to be implemented)</div>;
      case "manageProfile":
        return (
          <div>
            Manage Admin Profile (Insert/Update/Delete) (to be implemented)
          </div>
        );
      case "manageCustomerProfile":
        return <div>Manage Customer Profiles (to be implemented)</div>;
      case "manageSellerProfile":
        return <div>Manage Seller Profiles (to be implemented)</div>;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
    alert("Logged out!");
  };

  return (
    <div className="dashboard-admin">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li
            className={activeTab === "viewProduct" ? " active" : ""}
            onClick={() => setActiveTab("viewProduct")}
          >
            <FaEye className="icon" />{" "}
            <span className="sidebar-label">View Product</span>
          </li>
          <li
            className={activeTab === "manageProduct" ? "active" : ""}
            onClick={() => setActiveTab("manageProduct")}
          >
            <FaEdit className="icon" />{" "}
            <span className="sidebar-label">Manage Product</span>
          </li>
          <li
            className={activeTab === "manageCustomerProfile" ? "active" : ""}
            onClick={() => setActiveTab("manageCustomerProfile")}
          >
            <FaUsers className="icon" />{" "}
            <span className="sidebar-label">Manage Customer</span>
          </li>
          <li
            className={activeTab === "manageSellerProfile" ? "active" : ""}
            onClick={() => setActiveTab("manageSellerProfile")}
          >
            <FaStore className="icon" />{" "}
            <span className="sidebar-label">Manage Seller</span>
          </li>
          <li
            className={activeTab === "manageProfile" ? "active" : ""}
            onClick={() => setActiveTab("manageProfile")}
          >
            <FaUserCog className="icon" />{" "}
            <span className="sidebar-label">Manage Profile</span>
          </li>
        </ul>
        <button className="logout-btn expanded" onClick={handleLogout}>
          <FaSignOutAlt className="icon logout-icon" />{" "}
          <span className="sidebar-label">Logout</span>
        </button>
      </aside>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default DashboardAdmin;
