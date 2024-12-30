import React, { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayComponent from "./components/Display";
import Registration from "./components/Registration";
function Home() {
  return (
    <div>
      <Header />
      <Registration />
      <Footer />
    </div>
  );
}

export default Home;
