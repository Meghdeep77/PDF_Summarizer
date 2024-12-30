import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function NewPage() {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>About Us</h2>
        <p>
          This is the About page. You can add information about your website or
          company here.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default NewPage;
