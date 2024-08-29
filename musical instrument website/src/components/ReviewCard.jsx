import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./ReviewCard.css";

export default function ReviewCard({ review, name, image }) {
  return (
    <div className="review-card">
      <div className="part1">
        <img id="quot" src="Group 523.png" alt="" />
        <p>{review}</p>
      </div>

      <div className="part2">
        <img src={image} alt="" />
        <p>{name}</p>
        <div className="review-social-icons">
          <InstagramIcon className="social-icon" />
          <FacebookIcon className="social-icon" />
          <TwitterIcon className="social-icon" />
        </div>
      </div>
    </div>
  );
}
