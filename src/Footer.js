import React from 'react'
import "./Footer.css"
// import { Link, useHistory } from 'react-router-dom'
import "./Nav.css";


function Footer() {
  return (
    <footer>
      <div className="section-p1">
        <div className="col">
          <a href="#" className="logu"> <img className="logu"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" style={{ width: "100px", borderRadius: "10px" }} alt="Netflix Logo" /></a>
          <h4>Head Office</h4>
          <p><strong>Addresss:</strong> 18 Street, D/Line, PH, Rivers State</p>
          <p><strong>Phone:</strong> +23480123456789</p>
          <p><strong>Hours:</strong> 09:00 - 18:00, Mon - Sat</p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>


        <div className="col">
          <h4>My Account</h4>
          <a href='https://www.netflix.com/ng/login'>Sign in</a>
          <a href="#">Trending For Me</a>
          <a href="#">My Wishlist</a>
          <a href="#">My Movies</a>
          <a href="#">Help</a>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Service Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Teams & Conditions</a>
          <a href="https://greenojegwo.netlify.app/contact.html">Contact Us</a>
        </div>

        <div className="col install">
          <h4>Install the App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <a href="https://apps.apple.com/us/app/netflix/id363590051"><img src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Image.png" alt="Apple Store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en&gl=US"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_GSGDneF42Y3lPYO4HHsKm8pyRHyWRJM7er0t0T381hvQAc_ii7Hme_O_Ym6G4fSbAg&usqp=CAU" alt="Google Play Store" /></a>
          </div>
          <p>Secure Payment Gateways</p>
          <img src="https://www.kindpng.com/picc/m/52-524533_secure-payment-png-shopify-guaranteed-safe-checkout-transparent.png" style={{ width: "270px" }} alt="Secure Payment System" />
        </div>

        <div className="copyright">

          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>

          <p className='green'>© 2022. Netflix Clone. Built By <a href="http://greenojegwo.netlify.app/">Green Edwin</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer