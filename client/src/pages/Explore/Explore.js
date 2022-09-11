import { Component, React } from "react";
import all from "../../assets/img/explore/genre-select-all.svg";
import hiphop from "../../assets/img/explore/genre-select.svg";
import hiphophero from "../../assets/img/explore/hiphop.svg";
import allhero from "../../assets/img/explore/all.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import all1 from "../../assets/img/explore/audio-for-sale/all1eth.svg";
import all2 from "../../assets/img/explore/audio-for-sale/all2eth.svg";
import all3 from "../../assets/img/explore/audio-for-sale/all3eth.svg";
import buy from "../../assets/img/explore/audio-for-sale/buy.svg";
import hip1 from "../../assets/img/explore/audio-for-sale/hip1eth.svg";
import hip2 from "../../assets/img/explore/audio-for-sale/hip2eth.svg";
import hip3 from "../../assets/img/explore/audio-for-sale/hip3eth.svg";
import "./Explore.css";

class Explore extends Component {
  state = {
    genres: "all",
    id: "0",
    name: "Icelandic Arpegios",
    audio: "https://bafybeifbgoo4xupoud3nx573hw5d7lg4ad5znv2dn54z5ni57e76pkoo6u.ipfs.nftstorage.link/"

  };
  handleGenreChange = () => {
    //if genre is all, then set state to hiphop otherwise set state to all
    if (this.state.genres === "all") {
      this.setState({ genres: "hiphop" });
    } else {
      this.setState({ genres: "all" });
    }
  };
  render() {
    if (this.state.genres === "all") {
      return (
        <>
          <Header />
          <img
            className="genre-select"
            src={all}
            alt="genre selection"
            onClick={this.handleGenreChange}
          />
          <img
            className="genre-hero"
            src={allhero}
            alt="general producer image"
          />
          <div className="sale-items">
            <div className="sale-item all1">
              <img src={all1} alt="eth price" />
              <img src={buy} alt="" />
            </div>
            <div className="sale-item all2">
              <img src={all2} alt="eth price" />
              <img src={buy} alt="" />
            </div>
            <div className="sale-item all3">
              <img src={all3} alt="eth price" />
              <img src={buy} alt="" />
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header />
          <img
            className="genre-select"
            src={hiphop}
            alt="genre selection"
            onClick={this.handleGenreChange}
          />
          <img className="genre-hero" src={hiphophero} alt="hiphop" />
          <div className="sale-items">
            <div className="sale-item hip1">
              <img src={hip1} alt="eth price" />
              <img src={buy} alt="" />
            </div>
            <div className="sale-item hip2">
              <img src={hip2} alt="eth price" />
              <img src={buy} alt="" />
            </div>
            <div className="sale-item hip3">
              <img src={hip3} alt="eth price" />
              <img src={buy} alt="" />
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
export default Explore;
