import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black';
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  const pageSize = 15;

  return (
    <div>
      <BrowserRouter> 
        <Navbar mode={mode} toggleMode={toggleMode} alert={null /* showAlert */} />

        <LoadingBar 
          height={3} 
          color='#fc0505' 
          progress={progress} />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key='general' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="general" country="us" />} />
          <Route exact path="/Business" element={<News setProgress={setProgress} key='business' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="business" country="us" />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key='entertainment' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="entertainment" country="us" />} />
          <Route exact path="/General" element={<News setProgress={setProgress} key='general' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="general" country="us" />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} key='health' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="health" country="us" />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} key='science' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="science" country="us" />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} key='sports' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="sports" country="us" />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress} key='technology' mode={mode} toggleMode={toggleMode} pageSize={pageSize} category="technology" country="us" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
