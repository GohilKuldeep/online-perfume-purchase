import React, { useState } from "react";
import "../App.css";
import styles from "../css/LoginComponent.module.css";

const LoginComponent = () => {
  const [accountType, setAccountType] = useState("admin");
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.header}>Login</h2>
      <div className={styles.accountTypeContainer}>
        <div
          className={`${styles.accountType} ${
            accountType === "admin"
              ? styles.accountTypeSelected
              : styles.accountTypeUnselected
          }`}
          onClick={() => setAccountType("admin")}
        >
          <h3 style={{ margin: 0, fontSize: "16px" }}>Admin</h3>
          <p
            style={{
              margin: "5px 0 0",
              fontSize: "10px",
              color: accountType === "admin" ? "#fff" : "#666",
            }}
          >
            Manage the platform
          </p>
        </div>
        <div
          onClick={() => setAccountType("buyer")}
          className={`${styles.accountType} ${
            accountType === "buyer"
              ? styles.accountTypeSelected
              : styles.accountTypeUnselected
          }`}
        >
          <h3 style={{ margin: 0, fontSize: "16px" }}>Buyer</h3>
          <p
            style={{
              margin: "5px 0 0",
              fontSize: "10px",
              color: accountType === "buyer" ? "#fff" : "#666",
            }}
          >
            Shop for products
          </p>
        </div>
        <div
          onClick={() => setAccountType("seller")}
          className={`${styles.accountType} ${
            accountType === "seller"
              ? styles.accountTypeSelected
              : styles.accountTypeUnselected
          }`}
        >
          <h3 style={{ margin: 0, fontSize: "16px" }}>Seller</h3>
          <p
            style={{
              margin: "5px 0 0",
              fontSize: "10px",
              color: accountType === "seller" ? "#fff" : "#666",
            }}
          >
            Sell your products
          </p>
        </div>
      </div>
      <input
        type="email"
        placeholder="Email"
        className={styles.inputFieldEmail}
      />
      <div style={{ position: "relative", width: "95%", marginBottom: "15px" }}>
        <input
          type="password"
          placeholder="Password"
          className={styles.inputFieldPassword}
          style={{ paddingRight: "35px" }}
        />
      </div>
      <p
        className={styles.forgotPassword}
        onClick={() => alert("Forgot Password functionality coming soon!")}
      >
        Forgot Password?
      </p>
      <button className={styles.submitButton}>Login</button>
    </div>
  );
};

export default LoginComponent;
