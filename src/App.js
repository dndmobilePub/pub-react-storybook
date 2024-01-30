import React, { useEffect } from 'react';
import logo from './stories/assets/logo_dndm.png';
import './App.css';

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

  return (
    <div className="App">
      <section className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-copy" href="#">npm run storybook</a>
        <a
          className="App-btn"
          href="https://github.com/dndmobilePub/pub-react-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          git Clone repository
        </a>
      </section>
    </div>
  );
}

export default App;
