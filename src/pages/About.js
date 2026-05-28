import React from 'react'

export default function About() {

  return (

    <div className="about-page">

      {/* Hero Section */}

      <div className="about-hero">

        <h1>About Cartify 🛍️</h1>

        <p>

          Cartify is a modern ecommerce platform
          built with React.js to provide a smooth
          shopping experience.

        </p>

      </div>



      {/* Features */}

      <div className="about-features">

        <div className="feature-card">

          <h2>⚡ Fast Shopping</h2>

          <p>
            Smooth and responsive ecommerce UI.
          </p>

        </div>



        <div className="feature-card">

          <h2>❤️ Wishlist</h2>

          <p>
            Save your favorite products easily.
          </p>

        </div>



        <div className="feature-card">

          <h2>🌙 Dark Mode</h2>

          <p>
            Premium modern dark theme support.
          </p>

        </div>

      </div>



      {/* Bottom */}

      <div className="about-bottom">

        <h2>Our Mission 🚀</h2>

        <p>

          We aim to create a beautiful and user-friendly
          ecommerce experience using modern frontend
          technologies.

        </p>

      </div>

    </div>

  )

}