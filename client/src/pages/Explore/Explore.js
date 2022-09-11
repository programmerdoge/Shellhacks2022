import { Component, React } from "react";
import all from "../../assets/img/explore/genre-select-all.svg";
import hiphop from "../../assets/img/explore/genre-select.svg";
import hiphophero from "../../assets/img/explore/hiphop.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Explore extends Component {
  state = {
    genres: "all",
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
            src={all}
            alt="genre selection"
            onClick={this.handleGenreChange}
          />
          <img src={hiphophero} alt="hiphop" />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header />
          <img
            src={hiphop}
            alt="genre selection"
            onClick={this.handleGenreChange}
          />
          <img src={hiphop} alt="hiphop" />
          <img src="allhero" alt="main image" />
          <Footer />
        </>
      );
    }
  }
}
export default Explore;
