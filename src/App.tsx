import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          This app is made with <strong>GOOD</strong> practices and is quite{' '}
          <strong>FAST</strong> to load
        </p>
        <p>
          There is not a single linked CSS and jQuery in the header so the page
          is not slowed down
        </p>
        <p>
          <strong>Also</strong>, the image bellow is at the right size and
          format (png)
        </p>
        <img
          style={{ width: '100%' }}
          src='https://i.ibb.co/wMkHfSj/rsz-1bad-image.png'
          alt='img'
        />
      </header>
    </div>
  );
}

export default App;
