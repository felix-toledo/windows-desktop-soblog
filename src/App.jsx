import Desktop from './components/Desktop.jsx'
import Menu from './components/Menu.jsx'
import Window from './components/Window.jsx'
import Game from './components/Game.jsx'
import './styles/App.css'
import getPageInfo from './logic/getPageInfo.js'
import {useState} from 'react'


function App() {

  const temas = getPageInfo();

  const [actualWindow, setActualWindow] = useState(null);
  const [minimizedWindow, setMinimizedWindow] = useState(true);


  return (
    <div className='all'>
      <Desktop setActualWindow={setActualWindow} setMinimizedWindow={setMinimizedWindow}/>
      <Menu actualWindow={actualWindow} setMinimizedWindow={setMinimizedWindow} minimizedWindow={minimizedWindow} setActualWindow={setActualWindow}/>
      <Window tema={temas[actualWindow]} minimized={minimizedWindow} setMinimizedWindow={setMinimizedWindow} setActualWindow={setActualWindow}/>
    </div>
  )
}

export default App
