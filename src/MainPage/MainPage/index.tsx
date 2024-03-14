import '../../App.css';
import './styles/style.css';
import Header from '../../components/Header';

//imgs
import HogwartsLetteryImg from "../../img/hogwartsLettery.svg";
import HogwartsCastleImg from "../../img/hogwartsCastle.png";
import Ring1 from "../../img/Rings/ring1.svg";
import Ring2 from "../../img/Rings/ring2.svg";
import Ring3 from "../../img/Rings/ring3.svg";
import Ring4 from "../../img/Rings/ring4.svg";
import Line from "../../img/Div/line.svg";
import TopLine from "../../img/Div/topLine.svg";
import HufflepuffIcon from "../../img/Houses/hufflepuffIcon.png";
import HufflepuffShield from "../../img/Houses/hufflepuffShield.png";


export default function App() {

  return (
    <>
      <Header/>
      <section className="sec1">
        <main>
        <img src={HogwartsLetteryImg} alt="hogwarts lettery" draggable="false" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button>Solicitar matrícula</button>
        </main>
        <aside>
            <div className="imgBox">
                <img className="castle" src={HogwartsCastleImg} alt="castelo de hogwarts" draggable="false" />
                <figure className="rings">
                    <img id='ring1' className="ring" src={Ring1} alt="castelo de hogwarts" draggable="false" />
                    <img id='ring2' className="ring" src={Ring2} alt="castelo de hogwarts" draggable="false" />
                    <img id='ring3' className="ring" src={Ring3} alt="castelo de hogwarts" draggable="false" />
                    <img id='ring4' className="ring" src={Ring4} alt="castelo de hogwarts" draggable="false" />
                </figure>
            </div>
        </aside>
      </section>
      <section className="sec2">
        <figure className='line1'>
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={TopLine} alt="Div" draggable="false" />
        </figure>
        <div>
            <aside>
                <div className="imgBox">
                    <img className="shield" src={HufflepuffShield} alt="castelo de hogwarts" draggable="false" />
                    <img id='ring1' className="ring" src={Ring2} alt="castelo de hogwarts" draggable="false" />
                    <img id='ring2' className="ring" src={Ring3} alt="castelo de hogwarts" draggable="false" />
                    <img id='ring3' className="ring" src={Ring1} alt="castelo de hogwarts" draggable="false" />

                </div>
            </aside>
            <main>
                <div className="houseBox">
                    <button className="button">a</button>
                    <button className="button">b</button>
                    <button className="button">c</button>
                    <button className="button">d</button>
                </div>
                <img src={HufflepuffIcon} alt="castelo de hogwarts" draggable="false" />
                <h3>HufflePuff</h3>
                <p>Ensinarei a todos e os tratarei como iguais</p>
            </main>
        </div>
        <figure className='bottomLine'>
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={Line} alt="Div" draggable="false" />
            <img className="line" src={TopLine} alt="Div" draggable="false" />
        </figure>
      </section>
      <section>
        
      </section>
      <footer>

      </footer>
    </>
    )
}