import React, { useState } from "react";
import axios from "axios";

export default function DonateForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  const handleDonate = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!name || !phone || !pan || !address || !amount) return setMessage("Please fill all fields.");

    setLoading(true);
    try {
      const orderResp = await axios.post(`${BACKEND_URL}/create-order`, {
        name, phone, pan, address, amount: Number(amount)
      });

      const { orderId, razorpayKey } = orderResp.data;
      await loadRazorpaySDK();

      const options = {
        key: razorpayKey,
        amount: Number(amount) * 100,
        currency: "INR",
        name: "Vihanta Foundation",
        description: "Donation",
        order_id: orderId,
        prefill: { name, contact: phone },
        handler: async function (response) {
          try {
            const verifyResp = await axios.post(`${BACKEND_URL}/verify-payment`, {
              ...response,
              donor: { name, phone, pan, address, amount }
            });

            if (verifyResp.data.status === "ok") {
              setMessage("Donation successful! Thank you ❤️");
            } else {
              setMessage("Payment verification failed.");
            }
          } catch {
            setMessage("Verification error.");
          }
        },
        theme: { color: "#1a73e8" }
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function () { setMessage("Payment failed or cancelled."); });
      rzp.open();
    } catch (err) {
      setMessage("Could not create order. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "auto", padding: 20 }}>
      <h2>Donate to Vihanta Foundation</h2>
      <form onSubmit={handleDonate}>
        <div><label>Name</label><br /><input value={name} onChange={e=>setName(e.target.value)} required /></div>
        <div><label>Phone</label><br /><input value={phone} onChange={e=>setPhone(e.target.value)} required /></div>
        <div><label>PAN Number</label><br /><input value={pan} onChange={e=>setPan(e.target.value)} required /></div>
        <div><label>Address</label><br /><textarea value={address} onChange={e=>setAddress(e.target.value)} required /></div>
        <div><label>Amount (INR)</label><br /><input type="number" value={amount} onChange={e=>setAmount(e.target.value)} required min="1" /></div>
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Donate"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

function loadRazorpaySDK() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Razorpay SDK failed to load."));
    document.body.appendChild(script);
  });
}
