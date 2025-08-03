import React from "react";
import styles from "../styles/Features.module.css";

const Feature = ({ title, children }) => (
  <div className={styles.feature}>
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

const Features = () => (
  <section className={styles.features}>
    <h2>Why Choose Us?</h2>
    <Feature title="Community Driven">
      Get support, share tips, and build together with thousands of developers.
    </Feature>
    <Feature title="Learning Resources">
      Access curated tutorials, challenges, and projects to boost your skills.
    </Feature>
    <Feature title="Job Board">
      Explore developer jobs and freelance gigs tailored to your stack.
    </Feature>
  </section>
);

export default Features;
