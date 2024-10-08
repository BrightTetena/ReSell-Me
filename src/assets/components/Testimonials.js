import { useState } from "react";
import img1 from "../img/Rectangle 16.png";
import img2 from "../img/img17.png";
import img3 from "../img/img18.png";
import img4 from "../img/Group 3.png";
import img5 from "../img/img16.png";
import arrow from "../img/Arrow1.png";
import arrow1 from "../img/Arrow2.png";

const Testimonials = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const testmonHead = {
    title: "Client Testimonials",
    title2:
      "We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.",
  };

  const [testmonCards] = useState([
    {
      image: img1,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 1,
    },
    {
      image: img2,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 2,
    },
    {
      image: img3,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 3,
    },
    {
      image: img2,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 4,
    },
    {
      image: img5,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 5,
    },
    {
      image: img1,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 6,
    },
  ]);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= slider.clientWidth; // Adjusted to use clientWidth for smoother scrolling
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += slider.clientWidth; // Adjusted to use clientWidth for smoother scrolling
  };

  return (
    <div className="testmonial">
      <div className="container-fluid outerTestmonial">
        <div className="row innerTestmonial">
          <div className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 testimonialItem">
            <h2>{testmonHead.title}</h2>
            <p>{testmonHead.title2}</p>
            <div className="d-flex">
              <button
                className="tabs active-tabs btn rounded-circle border-2 border border-light mx-3"
                onClick={slideLeft}
                type="button"
                aria-label="Left"
              >
                <img src={arrow1} alt="" className="img-fluid" />
              </button>
              <button
                className="tabs active-tabs rounded-circle border border-2 border-light btn mx-3"
                onClick={slideRight}
                type="button"
                aria-label="Right"
              >
                <img src={arrow} alt="" className="img-fluid" />
              </button>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-8 col-xl-6 col-xxl-6 testimonialItem">
            <div>
              <div className="d-flex overflow-hidden" id="slider" style={{ scrollBehavior: 'smooth' }}>
                {testmonCards.map((testmony) => (
                  <div className="col-12 col-md-6 col-lg-6 col-xl-8 col-xxl-8" key={testmony.id}>
                    <div className="card mx-1">
                      <img src={testmony.image} alt="" className="img-fluid" />
                      <div className="commas rounded-circle">
                        <img src={testmony.image2} alt="" className="img-fluid" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{testmony.title}</h5>
                        <h6 className="">{testmony.title2}</h6>
                        <p className="card-text">{testmony.title3}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
