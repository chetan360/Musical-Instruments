import ReviewCard from "./ReviewCard";
import "./Review.css";

export default function Review() {
  return (
    <section>
      <div className="review">
        <div className="main-review">
          <img src="istockphoto-941495764-612x612 1.png" alt="" />
          <div className="review-text">
            <h1>Our Guarantee</h1>
            <h3>
              Buy Instruments & Equipment Online– 30-Day-Money-Back-Guarantee
            </h3>
            <p>
              Occasionally it’s love at first sight, but sometimes you may be
              unhappy with a product’s performance, or you may just change your
              mind. Have no fear, because we provide our customers with up to 30
              days to return the item for either money back or store credit.
            </p>

            <button className="btn">Know more &gt;</button>
          </div>
        </div>
        <div className="review-section">
          <h1>Real people, real results</h1>
          <div className="reviews">
            <ReviewCard
              review={
                "Very user friendly. I found it very to navigate and find the things. I needed. Will use it frequently, I am sure about it."
              }
              name={"Aniket"}
              image={"review1.png"}
            />
            <ReviewCard
              review={
                "Very user friendly. I found it very to navigate and find the things. I needed. Will use it frequently, I am sure about it."
              }
              name={"Reshma"}
              image={"review2.png"}
            />
            <ReviewCard
              review={
                "Very user friendly. I found it very to navigate and find the things. I needed. Will use it frequently, I am sure about it."
              }
              name={"Dhiraj"}
              image={"review3.png"}
            />
            {/* <button className="btn">Read All Rewiews &gt;</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
