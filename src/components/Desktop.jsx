/* eslint-disable react/prop-types */
import Game from './Game'
import DirectAccess from './DirectAccess.jsx'
import getPageInfo from '../logic/getPageInfo.js'
import '../styles/Desktop.css'
import { useState } from 'react'

export default function Desktop({setActualWindow, setMinimizedWindow}){
     const [gameHidden, setGameHidden] = useState(true);

     const temas = getPageInfo();
     
     function ingresoAPagina(e, id){
          setActualWindow(id);
          setMinimizedWindow(false);
     }

     function ingresoJuego(){
          setGameHidden(false)
     }
     
     return(
          <div className="desktop">
          {
               temas.map((tema) => {
               return (
                    <DirectAccess key={tema.id} onDoubleClick={(e) => ingresoAPagina(e, tema.id)} img={tema.icon} title={tema.iconTitle}/>                    )
               })
          }
          <DirectAccess onDoubleClick={ingresoJuego} img={"quizIcon.png"} title="Quiz!"/>
          <Game isHidden = {gameHidden} setGameHidden={setGameHidden}/>
          </div>
     )
}