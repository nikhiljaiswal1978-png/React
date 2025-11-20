 import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", name, email, message);
  };

  return (
    <div className="container mt-4">
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Enter name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} 
           placeholder="Enter message" ></textarea>
        </div>
        <button className="btn btn-primary my-5">Submit</button>
      </form>
    </div>
  )
}

export default Contact
