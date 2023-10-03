import React, { useState } from "react";
import styles from "../css/login.module.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.logo}>
        <div className={styles.logo_items}>
          <h1 className={styles.tword}>T</h1>
          <h1 className={styles.word_items}>ask</h1>
        </div>

        <div className={styles.logo_items}>
          <h1 className={styles.mword}>M</h1>
          <h1 className={styles.word_items}>anagement</h1>
        </div>
        <div>
          <div className={styles.logo_items}>
            <h1 className={styles.sword}>S</h1>
            <h1 className={styles.word_items}>ystem</h1>
          </div>
        </div>
      </div>
      <div className={styles.login_container}>
        <h2 className={styles.login_title}>Login to TMS</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className={styles.additional_options}>
          <div className={styles.goForgetPasswordPage}>
            <p>Forgot Password?</p>
          </div>
          <div className={styles.goRegisterPage}>
            Don't have an account? <p>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;