import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";

export default function Footer() {
  return (
    <>
      <section className="contact">
        <div className="contact-info">
          <div className="first-info">
            <h1>RHYTHMIX</h1>
            <div className="review-social-icons2">
              <TwitterIcon className="social-icon2" />
              <InstagramIcon className="social-icon2" />
              <FacebookIcon className="social-icon2" />
              <LinkedInIcon className="social-icon2" />
            </div>
          </div>

          <div className="second-info">
            <h4>Contacts</h4>
            <p>
              <a>About us</a>
              <br />
              <a>Shipping & payment</a>
              <br />
              <a>News</a>
              <br />
              <a>Brands</a>
            </p>
          </div>

          <div className="third-info">
            <h4>Info</h4>
            <p>
              <a>FAQ</a>
              <br />
              <a>Terms & policy</a>
              <br />
            </p>
          </div>

          <div className="fourth-info">
            <h4>Email</h4>
            <p>
              <a>chetansmankar360@gmail.com</a>
              <br />
            </p>
            <br />

            <h4>Phone</h4>
            <p>902-184-9895</p>
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>
    </>
  );
}
