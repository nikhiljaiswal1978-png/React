 import React, { useState } from "react";

const Contact = () => {
 

  return (
    <div className="container mt-4">
      <h2>Contact Page</h2>
      <form  className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" placeholder="Enter email"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" rows="4" placeholder="Enter message" ></textarea>
        </div>
        <button className="btn btn-primary my-5">Submit</button>
      </form>
    </div>
  )
}

export default Contact
