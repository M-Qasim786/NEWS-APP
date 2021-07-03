import React from "react";
import "./App.css";
import NewsApp from "./Component/NewsApp";
import Nav from './Component/Nav';
import Footer from "./Component/Footer";

function App() {
  return (
    <>
    <Nav/>
      <NewsApp />
      <Footer/>
    </>
  );
}

export default App;
