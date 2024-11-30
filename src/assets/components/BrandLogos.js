import { useState } from "react";
import img from "../img/img19.png";
import img2 from "../img/img20.png";
import img3 from "../img/img21.png";
import img4 from "../img/img22.png";
import arrow from "../img/Arrow1.png";
import arrow1 from "../img/Arrow2.png";
import img5 from "../img/Rectangle1.png";
import img6 from "../img/Rectangle2.png";
import img7 from "../img/Rectangle3.png";
import img8 from "../img/Rectangle4.png";

const BrandLogos = () => {
  const [logos] = useState([
    { image: img, id: 1 },
    { image: img2, id: 2 },
    { image: img3, id: 3 },
    { image: img4, id: 4 },
    { image: img5, id: 5 },
    { image: img6, id: 6 },
    { image: img7, id: 7 },
    { image: img8, id: 8 },
  ]);

  const slideLeft = () => {
    const slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft - 350;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider3");
    slider.scrollBy({ left: 350, behavior: "smooth" });
  };





  return (
    <>
      <div className="logos">
        <div className="content-tabs container-fluid outerLogos">
          <div className="innerLogos">
            <div className="d-flex logoImgs" id="slider3">
              {logos.map((images) => (
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3" key={images.id}>
                  <div className="card justify-content-center mx-2">
                    <img src={images.image} alt="" className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center pt-4">


            <button className="rounded-circle mx-3" onClick={slideLeft} type="button" aria-label="Left">
            <img src={arrow1} alt="" className="img-fluid" />
            </button>

            <button className="rounded-circle mx-3" onClick={slideRight} type="button" aria-label="Right">
            <img src={arrow} alt="" className="img-fluid" />
            </button> 

          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogos;
