/* eslint-disable react/prop-types */
import '../styles/Menu.css'
import getPageInfo from '../logic/getPageInfo.js'

export default function Menu({actualWindow, setMinimizedWindow, minimizedWindow, setActualWindow}){
     const temas = getPageInfo();

     function clickeado(e, id){
          if(id != actualWindow){
               setActualWindow(id);
               setMinimizedWindow(false)
          } else {
               setMinimizedWindow(!minimizedWindow)
          }
     }


     return(
          <div className="windows-10-taskbar">
               <img src='./assets/images/menuIcon.png' className="start-button"></img>
               <div className="task-icons">

               {
               temas.map((tema) => {
               const taskClassName = actualWindow == tema.id && !minimizedWindow ? "task-icon opened windowActive" : actualWindow == tema.id ? "task-icon opened" : "task-icon";
               const imagenSource = `./assets/images/icons/${tema.icon}`
               return (
                    <button key={tema.id} onClick={(e) => clickeado(e, tema.id)} className={taskClassName}><img src={imagenSource}></img></button>             )
               })
          }
               </div>
          </div>
     )
}