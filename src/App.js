import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import logo from './stories/assets/logo_dndm.png';
import './App.css';

import ButtonPage from './Button';
import InputBoxPage from './InputBox';
import TablePage from './Tbl';
import ModalPopPage from './Modal';
import TySwiperPage from './Swiper';
import SelectPage from './Select';


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

  const [activeLink, setActiveLink] = useState('Button');

  useEffect(() => {
    const links = document.querySelectorAll('.component-btn');

    const handleClick = (event) => {
      links.forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    };
    
    links.forEach(link => link.addEventListener('click', handleClick));
    
    // 처음 로드될 때 'Button'에 해당하는 페이지를 활성화
    setActiveLink('Button');

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
            <Link className={`component-btn ${activeLink === 'Button' ? 'active' : ''}`} to="/Button" onClick={() => setActiveLink('Button')}>Button</Link>
            <Link className={`component-btn ${activeLink === 'InputBox' ? 'active' : ''}`} to="/InputBox" onClick={() => setActiveLink('InputBox')}>InputBox</Link>
            <Link className={`component-btn ${activeLink === 'Tbl' ? 'active' : ''}`} to="/Tbl" onClick={() => setActiveLink('Tbl')}>Table</Link>
            <Link className={`component-btn ${activeLink === 'Modal' ? 'active' : ''}`} to="/Modal" onClick={() => setActiveLink('Modal')}>ModalPop</Link>
            <Link className={`component-btn ${activeLink === 'Swiper' ? 'active' : ''}`} to="/Swiper" onClick={() => setActiveLink('Swiper')}>Swiper</Link>
            <Link className={`component-btn ${activeLink === 'Select' ? 'active' : ''}`} to="/Select" onClick={() => setActiveLink('Select')}>Select</Link>
          </div>
          <div id="cp-wrap" className="component-wrap">
            <h1 className="cp-tit dep01">{activeLink}</h1>
            <Routes>
              <Route path="/Button" element={<ButtonPage />} />
              <Route path="/InputBox" element={<InputBoxPage />} />
              <Route path="/Tbl" element={<TablePage />} />
              <Route path="/Modal" element={<ModalPopPage />} />
              <Route path="/Swiper" element={<TySwiperPage />} />
              <Route path="/Select" element={<SelectPage />} />
            </Routes>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;




  
  