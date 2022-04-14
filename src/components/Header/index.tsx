import Logo from "../../assets/jasonfoods.png";
import Animation from "../../assets/fastdelivery.png";
import "./style.css";
import Button from "../atom/Button";
import { useNavigate } from "react-router-dom";

interface Header {
  gray: boolean;
}

export default ({ gray }: Header) => {
  const navigate = useNavigate();

  return (
    <header className={gray ? "gray" : ""}>
      <div className="header--logo">
        <a onClick={() => navigate("/")}>
          <img src={Logo} alt="jason foods logo" />
          <img src={Animation} alt="icon-foods" id="run" />
        </a>
      </div>
      <div className="header--button">
        <Button name="Cadastrar" onClick={() => navigate("/register")} />
      </div>
    </header>
  );
};
