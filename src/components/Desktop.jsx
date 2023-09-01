/* eslint-disable react/prop-types */

import DirectAccess from './DirectAccess.jsx'
import getPageInfo from '../logic/getPageInfo.js'
import '../styles/Desktop.css'

export default function Desktop({setActualWindow, setMinimizedWindow}){


     const temas = getPageInfo();
     
     function ingresoAPagina(e, id){
          setActualWindow(id);
          setMinimizedWindow(false);
     }

     function ingresoJuego(){
          alert("juego");
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
          </div>
     )
}