import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-section"]}>
        <div className={classes["individual-section"]}>
          <h4>Get To Know Us</h4>
          <ul>
            <li>About Our Page</li>
            <li>Careers</li>
            <li>Best4U</li>
          </ul>
        </div>

        <div className={classes["individual-section"]}>
          <h4>Connect With Us</h4>
          <ul className={classes.social}>
            <li>
              <a href="##">
                Facebook <i className="fab fa-facebook "></i>
              </a>
            </li>
            <li>
              <a href="##">
                Instagram <i className="fab fa-instagram "></i>
              </a>
            </li>
            <li>
              <a href="##">
                Twitter <i className="fab fa-twitter "></i>
              </a>
            </li>
            <li>
              <a href="##">
                Youtube <i className="fab fa-youtube "></i>
              </a>
            </li>
          </ul>
        </div>

        <div className={classes["individual-section"]}>
          <h4>For Any Queries</h4>
          <ul>
            <li>Call us on +91 8899888998</li>
            <li>Careers</li>
            <li>Best4U</li>
          </ul>
        </div>
      </div>
      <div className={classes.line}></div>

      <h2>All @copyright Reserved by BestSHOP4U</h2>
    </div>
  );
};

export default Footer;
