import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import logo from './stories/assets/logo_dndm.png';
import './App.css';
import InputBoxPage from './InputBox';
import TablePage from './Tbl';
import ModalPopPage from './Modal';


function App() {
  useEffect(() => {
    const appCopyLink = document.querySelector('.App-copy');

    const handleClick = (event) => {
      event.preventDefault();

      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = appCopyLink.textContent;
      document.body.appendChild(tempTextarea);

      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999);

      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      appCopyLink.classList.add('copied');
      setTimeout(() => {
        appCopyLink.classList.remove('copied');
      }, 3000);
    };

    appCopyLink.addEventListener('click', handleClick);

    return () => {
      appCopyLink.removeEventListener('click', handleClick);
    };
  }, []);

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const links = document.querySelectorAll('.component-btn');

    const handleClick = (event) => {
      links.forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    };

    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);
  
  return (
    <div className="App">
      <section className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-copy" href="#">
          npm run storybook
        </a>
        <a
          className="App-btn"
          href="https://github.com/dndmobilePub/pub-react-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          git Clone repository
        </a>
        <div className="pg-contentWrap">
          <div className="component-btn-wrap">
            <Link className={`component-btn ${activeLink === 'InputBox' ? 'active' : ''}`} to="/InputBox" onClick={() => setActiveLink('InputBox')}>InputBox</Link>
            <Link className={`component-btn ${activeLink === 'Tbl' ? 'active' : ''}`} to="/Tbl" onClick={() => setActiveLink('Tbl')}>Table</Link>
            <Link className={`component-btn ${activeLink === 'Modal' ? 'active' : ''}`} to="/Modal" onClick={() => setActiveLink('Modal')}>ModalPop</Link>
          </div>
          <div className="component-wrap">
            <Routes>
              <Route path="/InputBox" element={<InputBoxPage />} />
              <Route path="/Tbl" element={<TablePage />} />
              <Route path="/Modal" element={<ModalPopPage />} />
            </Routes>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;




  
  