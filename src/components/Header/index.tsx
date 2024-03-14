import "./style/style.css"
import HogwartsImg from "../../img/hogwartsIcon.svg";

export default function Header() {
  return (
    <header className="mainHeader">
        <nav>
          <div>
            <img src={HogwartsImg} alt="ícone de hogwarts" draggable="false" />
            <ul>
              <li>Início</li>
              <li>Casas</li>
              <li>Pilares</li>
            </ul>
          </div>
          <button>Entrar</button>
        </nav>
      </header>
  );
}
