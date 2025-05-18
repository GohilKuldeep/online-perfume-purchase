import React, { useState } from "react";
import "../css/Dashboard.css";
import {
  FaEye,
  FaUserCog,
  FaEdit,
  FaPlus,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardSeller = () => {
  const [activeTab, setActiveTab] = useState("viewProduct");

  const renderContent = () => {
    switch (activeTab) {
      case "addProduct":
        return <div>Add Product Form (to be implemented)</div>;
      case "viewProduct":
        return <div>View All Product Information (to be implemented)</div>;
      case "manageProfile":
        return (
          <div>
            Manage Seller Profile (Insert/Update/Delete) (to be implemented)
          </div>
        );
      case "manageProduct":
        return <div>Manage Product (to be implemented)</div>;
      case "manageOrder":
        return <div>Manage Order Information (to be implemented)</div>;
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
        <h2>Seller Dashboard</h2>
        <ul>
          <li
            className={activeTab === "viewProduct" ? "active" : ""}
            onClick={() => setActiveTab("viewProduct")}
          >
            <FaEye className="icon" />{" "}
            <span className="sidebar-label">View Product</span>
          </li>
          <li
                      className={activeTab === "addProduct" ? "active" : ""}
                      onClick={() => setActiveTab("addProduct")}
                    >
                      <FaPlus className="icon" />{" "}
                      <span className="sidebar-label">Add Product</span>
                    </li>
          <li
            className={activeTab === "manageProduct" ? "active" : ""}
            onClick={() => setActiveTab("manageProduct")}
          >
            <FaEdit className="icon" />{" "}
            <span className="sidebar-label">Manage Product</span>
          </li>
          <li
            className={activeTab === "manageOrder" ? "active" : ""}
            onClick={() => setActiveTab("manageOrder")}
          >
            <FaClipboardList className="icon" />{" "}
            <span className="sidebar-label">Manage Order</span>
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

export default DashboardSeller;
