import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import {BuyPage} from './Pages/BuyPage';
import {SentPage} from './Pages/SentPage';
import {PackedPage} from './Pages/PackedPage';
import {RemainderPage} from './Pages/RemainderPage';
import {FinancePage} from './Pages/FinancePage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <RemainderPage /> } />
        <Route path='/sent' element={ <SentPage /> } />
        <Route path='/packed' element={ <PackedPage /> } />
        <Route path='/buy' element={ <BuyPage /> } />
        <Route path='/finance' element={ <FinancePage /> } />
      </Routes>
    </>
  );
}

export default App;
