// assets
import logo from "../assets/logo.svg";
// style
import "../style/header.css";

function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} className="logoTopleft" alt="Vite logo" />
      <div className="headerItems">
        <div className="headerItem">Accueil</div>
        <div className="headerItem">Profil</div>
        <div className="headerItem">Réglage</div>
        <div className="headerItem">Communauté</div>
      </div>
    </div>
  );
}

export default Header;
