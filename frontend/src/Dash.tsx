import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayComponent from "./components/Display";
import Registration from "./components/Registration";
import PayButton from "./components/PayButton";
import React, { useEffect, useState } from "react";

const Dash: React.FC = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch("http://localhost:8080/auth/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          setUserName(data.username);
        }
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Welcome to the Dashboard!</h1>
        {userName && <h2>Hello, {userName}!</h2>}
      </div>
      <PayButton />
      <Footer />
    </>
  );
};

export default Dash;
