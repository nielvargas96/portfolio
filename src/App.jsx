import { useState } from 'react';
import './assets/sass/style.scss'
// import Header from './layout/Header.jsx'
import Main from './layout/Main/Main'
import Header from './layout/Header/Header';
import StickyCursorContext from './context/StickyCursorContext';
import StickyCursor from './components/StickyCursor/StickyCursor'
import LogoContext from './context/LogoContext';


function App() {

  const [showStickyCursor, setShowStickyCursor] = useState(false);
  const [[stickyText, stickyDefault], setStickyText] = useState(['', '',]);
  const [img, setImg] = useState('');
  const [shape, setShape] = useState('');
  const [logo, setLogo] = useState(false)

  return (
    <StickyCursorContext.Provider
      value={{
        showStickyCursor,
        setShowStickyCursor,
        stickyText,
        stickyDefault,
        setStickyText,
        img,
        setImg,
        shape,
        setShape
      }}>
      <LogoContext.Provider
        value={{
          logo,
          setLogo
        }}>
        <StickyCursor />
        <div className='app'>
          <Header />
          <Main />
        </div>
      </LogoContext.Provider>
    </StickyCursorContext.Provider>
  )
}

export default App
