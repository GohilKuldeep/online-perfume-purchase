import React, { useState } from "react";
import "../App.css";
import styles from "../css/SignUpComponent.module.css";

const SignUpComponent = () => {
  const [accountType, setAccountType] = useState("buyer");

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.header}>Sign Up</h2>
      <div className={styles.accountTypeContainer}>
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
      <div className={styles.inputContainer}>
        <div className={styles.inputRow}>
          <input type="text" placeholder="Name" className={styles.inputField} />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          className={styles.inputFieldPassword}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.inputFieldConfirmPassword}
        />
      </div>
      <button className={styles.submitButton}>Sign Up</button>
    </div>
  );
};

export default SignUpComponent;
