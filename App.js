import React from "react";
import styles from "./styles/App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Features />
        <Blog />
        <Testimonials />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
