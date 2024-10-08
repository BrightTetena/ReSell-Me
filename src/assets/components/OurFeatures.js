import { useState } from "react";
import featureimg from "../img/img7.png";
import featureimg1 from "../img/img8.png";
import featureimg2 from "../img/img9.png";
import featureimg3 from "../img/img10.png";
const OurFeatures = () => {
  const featureTitles = {
    heading: `Resellme’s Features`,
    title: `The Resellme platform has a wide range of features 
        which make it stand out from all competitors. Here we have j
        ust a few of those.`,
  };
  const [featureSecTitles] = useState([
    {
      img: featureimg,
      title: "Best Purchase Rates",
      title2: `You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors`,
      id: 1,
    },
    {
      img: featureimg1,
      title: "Instant Payouts",
      title2: `USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right? `,
      id: 2,
    },
    {
      img: featureimg2,
      title: "No Monthly Commitments",
      title2: `As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit.`,
      id: 3,
    },
    {
      img: featureimg3,
      title: "Business Automation",
      title2: `Place your business on autopilot by making use of our plugins. Head over to our plugins & intergrations panel to get started`,
      id: 4,
    },
  ]);
  return (
    <div className="ourFeatures">
      <div className="container-fluid outerFeatures">
        <div className="row innerFeatures">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 col xxl-6 featuresItems">
            <h2>{featureTitles.heading}</h2>
            <p>{featureTitles.title}</p>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 col xxl-6 featuresItems">
            <div className="row">
              {featureSecTitles.map((feature) => (
                <div
                  className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 "
                  key={feature.id}>
                  <div className="circle pb-4">
                    <img src={feature.img} alt="img" className="img-fluid rounded-circle" />
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text pb-5">{feature.title2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
