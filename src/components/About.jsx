import React from 'react'

const About = () => {
  return (
    
    <div className="container my-5 text-center">
      <h2>About Us</h2>
      <p>
        Welcome to our store! We are passionate about delivering the best products to our customers. Our mission is to offer a wide variety of quality items at competitive prices.
      </p>
      <p>
        Our journey started in 2020 with a small shop, and today, we’ve expanded to cater to a global audience. Thank you for choosing us as your trusted online store!
      </p>

      <h2 className="mt-5">Meet Our Team</h2>
      <div className="row justify-content-center">
        {['Mike', 'Robert', 'James', 'Jerry'].map((name, idx) => (
          <div className="col-md-3 col-sm-6 mb-4" key={idx}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.ROJLMWQcPybcPj5Pn70_oAHaHa&pid=Api&P=0&h=180"
              alt={name}
              className="img-fluid rounded mb-2"
            />
            <h5>{name}</h5>
          </div>
        ))}
      </div>

      <div className="container text-center my-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x73QlN6A6NY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default About
