import "./Features.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default function Features() {
  return (
    <div className="features-section">
      <h1>Why Choose Us</h1>
      <h4>
        "Discover the Symphony of Selection: Explore Our <br /> Diverse Range of
        Musical Instruments."
      </h4>
      <div className="features">
        <div className="feature">
          <img src="shipping.png" alt="" />
          <h4>
            01 <br />
            FREE SHIPPING & RETURN
          </h4>
          <p>Free Shipping on all order over ₹1,500</p>
          <TrendingFlatIcon className="feature-arrow" />
        </div>
        <div className="feature">
          <img src="trusted.jpeg" alt="" />
          <h4>
            02 <br />
            TRUSTED MUSIC STORE
          </h4>
          <p>Trusted by over million of customers from India and abroad.</p>
          <TrendingFlatIcon className="feature-arrow" />
        </div>
        <div className="feature">
          <img src="payments.png" alt="" />
          <h4>
            03 <br />
            PROTECTED PAYMENTS
          </h4>
          <p>100% Payment Protection. Easy Return Policy</p>
          <TrendingFlatIcon className="feature-arrow" />
        </div>
        <div className="feature">
          <img src="support.jpeg" alt="" />
          <h4>
            04 <br />
            ON-DEMAND SUPPORT
          </h4>
          <p>Got a question? Please call us on +91 89777-77151 any time.</p>
          <TrendingFlatIcon className="feature-arrow" />
        </div>
        <div className="feature">
          <img src="delivery.jpeg" alt="" />
          <h4>
            05 <br />
            On time delivery
          </h4>
          <p>Experience Reliable On-Time Delivery</p>
          <TrendingFlatIcon className="feature-arrow" />
        </div>
        <div className="feature">
          <img src="blogs.png" alt="" />
          <h4>
            06 <br />
            Read blogs
          </h4>
          <p>Find music bloggers offering news, reviews.</p>
          <TrendingFlatIcon className="feature-arrow" />
        </div>
      </div>
    </div>
  );
}
