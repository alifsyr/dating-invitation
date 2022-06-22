import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home animate-left">
      <div className="home-container">
        <h1>Hey Aisha, there's a message for you 😜</h1>
        <Link to="/stories" className="home-button pushable">
          <span className="shadow"></span>
          <span className="edge dark-cream"></span>
          <span className="front cream">Open 📩</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
