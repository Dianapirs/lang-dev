import { useState } from 'react';
import './App.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Library from './components/Library/Library';
import Learn from './components/Learn/Learn';



function App() {

  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  console.log(library)

  const [wordIndex, setWordIndex] = useState(0);

  const progressBarWidth = {
    width: `${(100 / library.slice(-10).length) * wordIndex}vw`
  }

  /*const ProgressBar = () => {
    return (
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={progressBarWidth}></div>
      </div>
    )
  }*/

 

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/library' element={<Library library={library} setLibrary={setLibrary} />}></Route>
        <Route path='/learn' element={<Learn library={library} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
