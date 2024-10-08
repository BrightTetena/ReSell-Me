import NavBar from "./Navbar";
import bannerSecImg from "../img/img2.png";
const Banner = () => {
  const bannerTitles = {
    title: "Buy and sell domains with no capital!",
    title2:
      "Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes",
    title3: "SIGN UP FOR FREE",
    title4: "READ ABOUT US",
  }; 
  return (
    <>

    
      <div className="banner">
        <NavBar />
        <div className="row outerBanner text-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  innerBanner">
            <h1>{bannerTitles.title}</h1>
            <p>{bannerTitles.title2}</p>
            <div className="bannerButtons ">
              <button className="btn" type="button ">
                {bannerTitles.title3}
              </button>
              <button className="btn" type="button">
                {bannerTitles.title4}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bannerSecImg">
        <img src={bannerSecImg} alt="laptop" className="img-fluid" />
      </div>
    </>
  );
};

export default Banner;
