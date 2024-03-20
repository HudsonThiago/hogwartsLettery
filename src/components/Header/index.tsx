import "./style/style.css"
import HogwartsImg from "../../img/hogwartsIcon.svg";
import Button from "../Button";

export default function Header() {
  return (
    <header className="mainHeader">
        <nav>
          <img src={HogwartsImg} alt="ícone de hogwarts" draggable="false" />
          <div>
            <ul>
              <li><a>Início</a></li>
              <li><a>Casas</a></li>
              <li><a>Pilares</a></li>
            </ul>
          <Button>Entrar</Button>
          </div>
        </nav>
      </header>
  );
}
