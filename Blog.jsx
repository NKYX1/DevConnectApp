import React from "react";
import styles from "../styles/Blog.module.css";

const Post = ({ title, description, author }) => (
  <article className={styles.post}>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Author:</strong> {author}</p>
  </article>
);

const Blog = () => (
  <section className={styles.blog}>
    <h2>Latest Articles</h2>
    <Post
      title="Mastering React Components"
      description="Components are the heart of React apps. Learn how to structure, style, and optimize them."
      author="Sarah Dev"
    />
    <Post
      title="Using Props Like a Pro"
      description="Make your React components reusable and dynamic with props and destructuring."
      author="John Code"
    />
    <Post
      title="Understanding State and Effects"
      description="Learn the fundamentals of useState and useEffect with real-life examples."
      author="Lina Hooks"
    />
  </section>
);

export default Blog;
