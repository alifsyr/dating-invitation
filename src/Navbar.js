import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDisclaimer = () => {
    alert("Maaf ya kalo websitenya rada kurang rapi, soalnya baru belajar juga, trus pengen cepet-cepet selesai biar kamu bisa liat");
  };

  return (
    <div className="navbar animate-top">
      <nav>
        <Link to="/" className="navbar-button home all-btn">
          Home
        </Link>
        <button onClick={handleDisclaimer} className="navbar-button disclaimer all-btn">
          Disclaimer
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
