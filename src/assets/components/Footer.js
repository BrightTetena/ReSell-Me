import { useState } from "react";
import logo2 from "../img/Navlogo.png";

const Footer = () => {
  const copy = `Copyright © 2022 Resellme.`;
  const [footer] = useState([
    {
      footerTitle: "Libraries & Plugins",
      footerTitle2: "SDKs",
      footerTitle3: "WHMCS Plugin",
      footerTitle4: "WordPress Plugin",
      id: 1,
    },
    {
      footerTitle: "Community",
      footerTitle2: "Facebook",
      footerTitle3: "Developer Forums",
      footerTitle4: "Twitter",
      img: logo2,
      id: 2,
    },
    {
      footerTitle: "More",
      footerTitle2: "Blog",
      footerTitle3: "Docs",
      footerTitle4: "About Us",
      footerTitle5: "Terms of Service",
      footerTitle6: "Privacy Policy",
      id: 3,
    },
  ]);

  return (
    <>
      <footer>
        <div className="container-fluid outerFooter">
          <div className="innerFooter d-flex justify-content-between">
            {footer.map((titles) => (
              <div className="row footerItem align-items-center" key={titles.id}>
                <h3>{titles.footerTitle}</h3>
                <a href="#" className="link">
                  {titles.footerTitle2}{" "}
                  <img src={titles.img} alt="" className="img-fluid" />
                </a>
                <a href="#">
                  {titles.footerTitle3}{" "}
                  <img src={titles.img} alt="" className="img-fluid" />
                </a>
                <a href="#">
                  {titles.footerTitle4}{" "}
                  <img src={titles.img} alt="" className="img-fluid" />
                </a>
                {titles.footerTitle5 && <a href="#">{titles.footerTitle5}</a>}
                {titles.footerTitle6 && <a href="#">{titles.footerTitle6}</a>}
              </div>
            ))}
          </div>
        </div>
        <p className="text-center">{copy}</p>
      </footer>
    </>
  );
};

export default Footer;
