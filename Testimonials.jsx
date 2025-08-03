import React from "react";
import styles from "../styles/Testimonials.module.css";

const Testimonial = ({ text, author }) => (
  <div className={styles.testimonial}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
      alt={author}
    />
    <blockquote>{`"${text}"`}</blockquote>
    <p>- {author}</p>
  </div>
);

const Testimonials = () => (
  <section className={styles.testimonials}>
    <h2>What Developers Say</h2>
    <Testimonial
      text="DevConnect helped me land my first remote React job!"
      author="Alex Frontend"
    />
    <Testimonial
      text="The tutorials and challenges here are better than most courses I've paid for."
      author="Maria JS"
    />
  </section>
);

export default Testimonials;
