/* eslint-disable react/prop-types */

import {useState} from 'react';
import '../styles/Window.css'

export default function Window({tema, minimized, setMinimizedWindow, setActualWindow}){
    
     const [big, setBig] = useState(false)

     const windowClassName = minimized ? "windows-10-window hidden" : big ? "windows-10-window big" : "windows-10-window";

     function closeWindow(){
          setMinimizedWindow(!minimized)
          setActualWindow(null);
     }

     function minimizeWindowClick(){
          setMinimizedWindow(!minimized)
     }

     function bigOrSmall(){
          setBig(!big)
     }

     const imgSrc = tema == null ? "" : `/assets/images/textImages/${tema.image}`;
     const imgAlt = tema == null ? "" : `Image related to ${tema.title}`;
     const iconSrc = tema == null ? "" : `/assets/images/icons/${tema.icon}`;

     return(
          <div className={windowClassName}>
               <div className="title-bar">
                    <img className='icon-title' src={iconSrc} alt={imgAlt}></img>
                    <div className="window-title">{tema == null ? "" : tema.title}</div>
                    <div className="window-controls">
                         <button onClick={minimizeWindowClick} className="minimize-button">-</button>
                         <button onClick={bigOrSmall} className="maximize-button">□</button>
                         <button onClick={closeWindow} className="close-button">×</button>
                    </div>
               </div>
               <div className="content">
               {
                    tema == null ? "" : tema.text.map((parrafo, index) => {
                    return (
                         <li className='textParagraph' key={index}>{parrafo}</li>
                         )
                    })
               }
                    <img className='windowImage' src={imgSrc} alt={imgAlt}></img>
               </div>
          </div>
     )
}