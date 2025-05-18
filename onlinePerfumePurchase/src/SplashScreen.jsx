import React, { useState } from "react";
import logo from "./assets/favicon.png";
import style from "./css/Splashscreen.module.css";
import SignUpComponent from "./SignUp/SignUpComponent";
import LoginComponent from "./Login/LoginComponent";

const SplashScreen = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className={style.backgroundContainer}>
      <div className={style.glassContainer}>
        <div
          className={style.logoContainer}
          style={{
            transform: showLogin ? "translateX(0%)" : "translateX(100%)",
          }}
        >
          <img src={logo} alt="Logo" className={style.logoImage} />
          <h2 className={style.logoText}>Welcome To ScentCart</h2>
          <p className={style.logoSubText}>
            Your ultimate destination for premium perfumes
          </p>
        </div>

        <div style={{ flex: 1 }}>
          {showLogin ? (
            <div
              className={style.loginContainer}
              style={{
                transform: showLogin ? "translateX(0%)" : "translateX(100%)",
                opacity: showLogin ? 1 : 0,
              }}
            >
              <LoginComponent />
              <p className={style.TopSubText}>
                Don't have an account?{" "}
                <span
                  className={style.bottomSubText}
                  onClick={() => setShowLogin(false)}
                >
                  Create Account
                </span>
              </p>
            </div>
          ) : (
            <div
              className={style.signupContainer}
              style={{
                transform: showLogin ? "translateX(0%)" : "translateX(-100%)",
                opacity: showLogin ? 0 : 1,
              }}
            >
              <SignUpComponent />
              <p className={style.TopSubText}>
                Already have an account?{" "}
                <span
                  className={style.bottomSubText}
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
