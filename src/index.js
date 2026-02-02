import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass';
import HellWorld from './Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <AppClass msg="Hello MSG"/>
          <HellWorld msg="Hello Again!"/>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

