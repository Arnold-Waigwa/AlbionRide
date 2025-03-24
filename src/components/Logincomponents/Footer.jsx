import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <footer className={styles.footer}>
      <form onSubmit={handleSubmit} className={styles.footerForm}>
        <h3 className={styles.title}>Enter your login and password</h3>

        <div className={styles.footerField}>
          <label htmlFor="username" className={styles.footerLabel}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.footerInput}
            required
          />
        </div>

        <div className={styles.footerField}>
          <label htmlFor="password" className={styles.footerLabel}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.footerInput}
            required
          />
        </div>

        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>
            Remember me
          </label>
        </div>

        <button type="submit" className={styles.footerButton}>
          Enter
        </button>
      </form>
    </footer>
  );
};

export default Footer;
