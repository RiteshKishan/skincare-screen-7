import React from "react";
import "./Invoice.css";
import PreviewInvoice from "../PreviewInvoice/PreviewInvoice";
import InvoiceList from "../InvoiceList/InvoiceList";
import Payment from "../Payment/Payment.jsx";

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-head">Payment</div>
      <div className="invoice-subhead">Create a invoice for your patients</div>
      <div className="invoice-content">
          <InvoiceList />
        <PreviewInvoice />
      </div>
      <div className="payment-successful"></div>
      <Payment />
    </div>
  );
};

export default Invoice;
