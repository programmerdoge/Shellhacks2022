import footer from "../../assets/img/footer.svg"; // relative path to image
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <img className="footer" src={footer} alt="footer section" />
    </div>
  );
}
export default Footer;
