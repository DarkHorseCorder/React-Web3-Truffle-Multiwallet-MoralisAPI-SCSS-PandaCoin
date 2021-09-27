import React, {useEffect, useState} from 'react';
import Header from '../components/header'
import TokenPage from './tokenpage'
import TokenomicsPage from './tokenomicspage'
import RoadMapPage from './roadmappage'
import FreecoinProjectPage from './freepcoin-projectpage'
import AboutPage from './aboutpage'
import ContactformPage from './contactformpage'
import Footer from '../components/footer'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="wrapper">
            <main className="page"> 
                <TokenPage />
                <TokenomicsPage />
                <RoadMapPage />
                <FreecoinProjectPage />
                <AboutPage />
                <ContactformPage />
            </main>
        </div>
        <Footer />
    </div>
  );
}

export default App;
