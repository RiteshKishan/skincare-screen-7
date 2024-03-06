import React from "react";
import "./Payment.css";
import payment_success from "../Assests/paid_successful_icon.svg";
import gold_gift from '../Assests/gold_gift.svg';
import mail_icon from '../Assests/send_mail.svg'

const Payment = () => {
  const paymentData = [
    {
      head: "Payment Type:",
      text: "Net Banking",
    },
    {
      head: "Bank:",
      text: "HDFC",
    },
    {
      head: "Mobile:",
      text: "Net Banking",
    },
    {
      head: "Email:",
      text: "bdebashis182@gmail.com",
    },
  ];

  return (
    <div className="payment">
      <div className="payment-content">
        <div className="payment-success-logo">
          <img src={payment_success} alt="" />
        </div>
        <div className="payment-successful-message">Payment Successful</div>
        <div className="payment-order">Order ID #7864</div>
        <div className="payment-data">
          {paymentData.map((data) => {
            return (
              <div className="payment-each-data">
                <div className="payment-each-data-head">{data.head}</div>
                <div className="payment-each-data-text">{data.text}</div>
              </div>
            );
          })}
        </div>

        <div className="payment-amount">
          <p>Amount Paid</p>
          <p>$180.00</p>
        </div>
        <div className="payment-transaction">
          <p>Transaction ID</p>
          <p>#123456789065432</p>
        </div>  

        <div className="payment-points">
          <div className="points-button">
            <img src={gold_gift} alt="" />
            <p>480Points</p>
          </div>
        </div>

        <div className="payment-buttons-container">
          <div className="payment-buttons">
              <div className="mail-button">
                <img src={mail_icon} alt="" />
                <p>Send to Mail</p>
              </div>
              <div className="reward-button">
                Claim Reward points
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
