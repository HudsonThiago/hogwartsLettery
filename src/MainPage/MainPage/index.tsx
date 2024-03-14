import '../../App.css';
import './styles/style.css';
import Header from '../../components/Header';
import Card from "../../components/MainPageCard";
import HogwartsImg from "../../img/hogwartsIcon.svg";
import { useEffect } from 'react';

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

  const lineWidth=(e:any)=>{
    console.log(e);
  }

  // useEffect(()=>{
  //   const line = document.getElementById("#line1");
  //   console.log(line)
  // }, [])

  return (
    <>
      <Header/>
      <main className='mainContent'>
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
          {/* <img onResize={(e)=>lineWidth(e.target)} onClick={(e)=>lineWidth(e.target)} className="lineTeste" src={Line} alt="Div" draggable="false" /> */}
          {/* <svg onClick={(e)=>lineWidth(e)} xmlns="http://www.w3.org/2000/svg" width="960" height="80" viewBox="0 0 960 80" fill="none">
            <path d="M0 24V32H960V24H0Z" fill="#C4C4C4"/>
            <path d="M960 0V8H0V0H960Z" fill="#C4C4C4"/>
          </svg> */}
          <div>
              <aside>
                  <div className="imgBox">
                      <img className="shield" src={HufflepuffShield} alt="castelo de hogwarts" draggable="false" />
                      <img id='houseRing1' className="houseRing" src={Ring1} alt="castelo de hogwarts" draggable="false" />
                      <img id='houseRing2' className="houseRing" src={Ring2} alt="castelo de hogwarts" draggable="false" />
                      <img id='houseRing3' className="houseRing" src={Ring3} alt="castelo de hogwarts" draggable="false" />

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
        <section className='sec3'>
          <h1>PILARES</h1>
          <main>
              <Card title="MISSÃO" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <Card title="VISÃO" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <Card title="VALORES" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
          </main>
        </section>
      </main>
      <footer>
        <img src={HogwartsImg} alt="ícone de hogwarts" draggable="false" />
        <p>HogwartsLettery © 2024 - Hudson T. C. Cunha</p>
      </footer>
    </>
    )
}