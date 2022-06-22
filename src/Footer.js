import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer animate-bottom">
      <div className="footer-icon">
        <ul>
          <li>
            <Link to={{ pathname: "https://wa.me/628118428071" }} target="black">
              <i className="fa fa-whatsapp"></i>
            </Link>
          </li>
          {/* <li>
            <Link to={{ pathname: "https://www.linkedin.com/in/malik-rafsanjani/" }} target="black">
              <i className="fa fa-linkedin"></i>
            </Link>
          </li> */}
          <li>
            <Link to={{ pathname: "https://www.instagram.com/__zchrndkalif/" }} target="black">
              <i className="fa fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
