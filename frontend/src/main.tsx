import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Nav />
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)
