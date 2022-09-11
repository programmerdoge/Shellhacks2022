import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import hero from "../../assets/img/home/hero.svg";
import jazz from "../../assets/img/home/genres/jazz.svg";
import rock from "../../assets/img/home/genres/rock.svg";
import hiphop from "../../assets/img/home/genres/hiphop.svg";
import "./Home.css";
import explore from "../../assets/img/home/explore.svg";
import about from "../../assets/img/home/about.svg";
function Home() {
  return (
    <>
      <Header />
      <img className="hero-section" src={hero} alt="hero section" />
      <div className="genre-container">
        <Link to="./explore">
          <img className="genre-container-img" src={jazz} alt="jazz" />
        </Link>
        <Link to="./explore">
          <img className="genre-container-img" src={rock} alt="rock" />
        </Link>
        <Link to="./explore">
          <img className="genre-container-img" src={hiphop} alt="hiphop" />
        </Link>
      </div>
      <div className="explore-button">
        <img
          className="explore-button"
          src={explore}
          alt="add explore button"
        />
      </div>
      <div className="about-section">
        <img className="about-section" src={about} alt="about section" />
      </div>
      <div className="explore-button">
        <img
          className="explore-button"
          src={explore}
          alt="add explore button"
        />
      </div>
      <Footer />
    </>
  );
}
export default Home;
