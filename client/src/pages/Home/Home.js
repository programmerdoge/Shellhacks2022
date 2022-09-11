import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import hero from "../../assets/img/hero.svg";
import jazz from "../../assets/img/genres/jazz.svg";
import rock from "../../assets/img/genres/rock.svg";
import hiphop from "../../assets/img/genres/hiphop.svg";
import "./Home.css";
import explore from "../../assets/img/explore.svg";
import about from "../../assets/img/about.svg";

function Home() {
  return (
    <>
      <Header />
      <img className="hero-section" src={hero} alt="hero section" />
      <div className="genre-container">
        <img src={jazz} alt="jazz" />
        <img src={rock} alt="rock" />
        <img src={hiphop} alt="hiphop" />
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
