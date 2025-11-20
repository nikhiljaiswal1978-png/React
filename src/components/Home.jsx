import React from 'react'

const Home = () => {
  return (
     <main className="container my-5">
     <div id="carouselId" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.8_k7BLUWNPSPS0fP4kZZqAHaHa&pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="First Slide"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.OkV33hRYf7pnWph99qN1WgHaHa&pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="Second Slide"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.SeWPs8kR0v7agX7jz0HQ6wHaHa&pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="Third Slide"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId"
          data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="text-center">Services</h2>

      <div className="container my-4">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://tse2.mm.bing.net/th?id=OIP.vIK1YSz1R-_8zJKwj2aAoAHaJ4&pid=Api&P=0&h=180"
                alt="Rolex"/>
              <div className="card-body">
                <h4 className="card-title">Rolex</h4>
                <p className="card-text">
                  Rolex is a Swiss luxury watchmaker known for its precision, quality craftsmanship, and iconic designs.
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">Info</button>
                </div> </div>
            </div> </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://tse1.mm.bing.net/th?id=OIP.UKBTxWUK4eKeE3Srkwrb4gHaJE&pid=Api&P=0&h=180"
                alt="Casio"
              />
              <div className="card-body">
                <h4 className="card-title">Casio</h4>
                <p className="card-text">
                  Origin: Japan. Durable digital and analog watches, innovations like G-Shock and Pro Trek series, and budget-friendly options.
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">Info</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.Si5nhU-ByQZJCXICzpi95wHaLW&pid=Api&P=0&h=180"
                alt="Fastrack"/>
              <div className="card-body">
                <h4 className="card-title">Fastrack</h4>
                <p className="card-text">
                  Origin: India (part of Titan Company). Trendy and youthful designs targeted at younger audiences.
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">Info</button>
                </div></div>
            </div> </div>
        </div></div>
        </main>
  )
}

export default Home
