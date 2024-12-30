import React from "react";
import axios from "axios";

const PayButton = () => {
  const handlePay = () => {
    window.location.href = "http://127.0.0.1:8080/pay/phone";
  };

  return (
    <button
      onClick={handlePay}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      Pay Now
    </button>
  );
};

export default PayButton;
