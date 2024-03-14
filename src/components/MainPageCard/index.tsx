import "./style/style.css"
import KeyImg from "../../img/key.svg"

interface Card {
    title:string,
    text:string
}

export default function MainPageCard(props:Card) {
  return (
    <div className="mainPageCard">
        <img src={KeyImg} alt="ícone de chave" draggable="false" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  );
}
