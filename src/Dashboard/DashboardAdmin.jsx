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
import ViewAllProducts from "./ViewAllProducts";
import ManageCustomerProfile from "./ManageCustomerProfile";
import ManageSellerProfile from "./ManageSellerProfile";
import ManageAdminProfile from "./ManageAdminProfile";

const DashboardAdmin = () => {
  const [activeTab, setActiveTab] = useState("viewProduct");

  const renderContent = () => {
    switch (activeTab) {
      case "viewProduct":
        return <ViewAllProducts />;
      case "manageProfile":
        return <ManageAdminProfile />;
      case "manageCustomerProfile":
        return <ManageCustomerProfile />;
      case "manageSellerProfile":
        return <ManageSellerProfile />;
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
          <button className="logout-btn expanded" onClick={handleLogout}>
          <FaSignOutAlt className="icon logout-icon" />{" "}
          <span className="sidebar-label">Logout</span>
        </button>
        </ul>
        
      </aside>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default DashboardAdmin;
