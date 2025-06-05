import React, { useCallback, useState } from "react";
import "../App.css";
import styles from "../css/LoginComponent.module.css";
import { setLoginStatus } from "./LoginReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LoginComponent = () => {
  const [accountType, setAccountType] = useState("admin");
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handle = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleLogin = useCallback(async () => {
    if (!info.email) {
      toast.error("Please enter your email");
    } else if (!info.password) {
      toast.error("Please enter your password");
    } else {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        const foundUser = response.data.users.find(
          (user) =>
            user.email === info.email &&
            user.password === info.password &&
            (accountType === "admin" ||
              accountType === "buyer" ||
              accountType === "seller")
        );
        if (foundUser) {
          dispatch(setLoginStatus(true));
          if (accountType === "admin") {
            navigate("/DashboardAdmin");
          } else if (accountType === "buyer") {
            navigate("/DashboardBuyer");
          } else if (accountType === "seller") {
            navigate("/DashboardSeller");
          }
        } else {
          dispatch(setLoginStatus(false));
          toast.error("Invalid credentials or account type");
        }
      } catch (error) {
        toast.error("Error fetching user data");
        dispatch(setLoginStatus(false));
        console.error("Error fetching user data:", error);
      }
    }
  }, [dispatch, accountType, info, navigate]);

  return (
    <>
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
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={handle}
          className={styles.inputFieldEmail}
        />
        <div
          style={{ position: "relative", width: "95%", marginBottom: "15px" }}
        >
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={info.password}
            onChange={handle}
            className={styles.inputFieldPassword}
            style={{ paddingRight: "35px" }}
          />
        </div>
        <p
          className={styles.forgotPassword}
          onClick={() =>
            toast.info("Forgot Password functionality coming soon!")
          }
        >
          Forgot Password?
        </p>
        <button onClick={handleLogin} className={styles.submitButton}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginComponent;
