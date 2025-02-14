import React from "react";
import BrandLogos from "./BrandLogos"; // Adjust the path if needed

const Faq = () => {
  const faqTitles = {
    title: "Frequently Asked Questions",
    title2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title3:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    accTitle: "What Do I Need To Get Started?",
    accTitle2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    accTitle3: "How Do I Get Paid After Referring A Client?",
    accTitle4: "How many People can i refer in a day?",
    accTitle5: "Do I need a visa card to get paid?",
    accTitle6: "Can i refer people to resellme for commission?",
  };
  const logoTitle = "We’ve Been Featured In";

  return (
    <>
      <div className="faq">
        <div className="container-fluid outerFaq">
          <div className="row innerFaq">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 faqItem">
              <h2>{faqTitles.title}</h2>
              <p>{faqTitles.title2}</p>
              <p>{faqTitles.title3}</p>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 faqItem">
              <div className="row accordionFaq">
                <div className="accordion" id="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        {faqTitles.accTitle}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion">
                      <div className="accordion-body">{faqTitles.accTitle2}</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        {faqTitles.accTitle3}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>{faqTitles.accTitle2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        {faqTitles.accTitle4}
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>{faqTitles.accTitle2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">
                        {faqTitles.accTitle5}
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="accordion">
                      <div className="accordion-body">
                        <p>{faqTitles.accTitle2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive">
                        {faqTitles.accTitle6}
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordion">
                      <div className="accordion-body">{faqTitles.accTitle2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <h2 className="text-center">{logoTitle}</h2>
      </div>

      {/* Slider 4 Added Below FAQ */}
      <BrandLogos />
    </>
  );
};

export default Faq;
