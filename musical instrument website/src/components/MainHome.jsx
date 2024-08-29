import "./MainHome.css";

export default function MainHome() {
  return (
    <>
      <div className="main-heading">
        <h1>
          Explore Our Diverse Range of <br /> Musical Instruments
        </h1>
      </div>
      <section className="main-home">
        <div className="circle1">
          <p>
            Mezzo Violin OB1 <br /> Violin Outfit <br />
            <i className="bx bx-left-arrow-alt"></i>
          </p>
          <br />
        </div>
        <div className="circle2">
          <p>
            Fiddlerman OB1 <br /> Violin Outfit <br />
            <i className="bx bx-right-arrow-alt"></i>
          </p>
        </div>
        <div className="imageBox">
          <div className="middle">
            <img
              src="stock-photo-black-classical-guitar-front-back-and-side-view-isolated-on-white-background-773479615-removebg-preview-qQSk3VZt--transformed 2.png"
              alt=""
            />

            <div className="ring-1"></div>
            <div className="ring-2"></div>
            <div className="ring-3"></div>
            <div className="ring-4"></div>
            <div className="ring-5"></div>
          </div>
        </div>
      </section>
      <div className="image-view">
        <div>
          <img src="side-view.jpeg" alt="" />
          <p>Side View</p>
        </div>
        <div>
          <img src="front-view.png" alt="" />
          <p>Front View</p>
        </div>
        <div>
          <img src="rear-view.jpeg" alt="" />
          <p>Rear View</p>
        </div>
      </div>
    </>
  );
}
