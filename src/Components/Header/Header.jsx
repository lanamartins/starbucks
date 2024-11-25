import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { HeaderStyle } from "./Style";
export default function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}