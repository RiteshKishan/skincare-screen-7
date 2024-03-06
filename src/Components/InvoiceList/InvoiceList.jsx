import React from "react";
import billing from "../Assests/billing_icon.svg";
import confirmation from "../Assests/confirmation_icon.svg";
import shipping from "../Assests/shipping_icon.svg";
import "./InvoiceList.css";
import camera_icon from "../Assests/Frame.svg";

const InvoiceList = () => {
  return (
    <div className="invoicelist">
      <div className="invoice-card">
        <div className="payment-header">
          <div>
            <img src={shipping} alt="" />
          </div>
          <div className="line-path"></div>
          <div>
            <img src={billing} alt="" />
          </div>
          <div className="line-path"></div>
          <div>
            <img src={confirmation} alt="" />
          </div>
        </div>

        <div className="payment-method">
          <p>Payment Method</p>
          <div className="payment-checkbox">
            <div className="credit-checkbox">
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              Credit/Debit card
            </div>

            <div className="credit-checkbox">
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              Net Banking
            </div>

            <div className="credit-checkbox">
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              Paypal
            </div>

            <div className="credit-checkbox">
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              Bitcoin
            </div>
          </div>
        </div>

        <div className="payment-details">Add Payment Details</div>

        <div className="payment-form">
          <div className="form-name">
            <p>Enter Name on Card</p>
            <div className="payment-inputform">
              <span>
                <img src={camera_icon} alt="" />
              </span>
            </div>
          </div>

          <div className="form-name">
            <p>Card Number</p>
            <div className="payment-inputform">
              <span>
                <img src={camera_icon} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="payment-form2">
          <div className="form-name">
            <p>Expiry (MM/YY)</p>
            <div className="payment-inputform">
              <span>
                <img src={camera_icon} alt="" />
              </span>
            </div>
          </div>

          <div className="form-name">
            <p>CVV Number</p>
            <div className="payment-inputform">
              <span></span>
            </div>
          </div>
        </div>

        <div className="payemnt-footer">
          <p>
            <div>By Clicking on ‘Confirm Payment’ I agree</div>
            <div>with theTerms and conditions of the Company.</div>
          </p>
        </div>
        <div className="footer-button">
          <button className="save-button">Save</button>
          <button className="confirm-payment-button">Confirm Payment</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
