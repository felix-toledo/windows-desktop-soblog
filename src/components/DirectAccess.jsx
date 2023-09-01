/* eslint-disable react/prop-types */
import '../styles/DirectAccess.css'
import {useState} from 'react'

export default function DirectAccess({img, title, onDoubleClick, key}){
     const [aDiClass, setADiClass] = useState("directAccess")     

     function classChange(){
          aDiClass == "directAccess" ? setADiClass("directAccess selected") : setADiClass("directAccess");    
     }

     const imageAlt = `${title} image icon`
     const iconSrc = `/assets/images/icons/${img}`
     return(
          <div key={key} onDoubleClick={onDoubleClick} onClick={classChange} className={aDiClass}>
               <img className="imageDirect" src={iconSrc} alt={imageAlt}></img>
               <p className="imageTitle">{title}</p>
          </div>
     )
}