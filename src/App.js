import React, { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import cards from "./card.json";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ScrollTop from "./components/ScrollTop";
import { HeroSection, Section } from "./components/Section";


function App() {
  const [card, setCards] = useState(cards)
  console.log(card);

  return (
    <div>
      <div className='bgImage'>
        <div className="mainInner">
          <Navbar />
          <HeroSection />
          <SearchBar cards={cards} setCards={setCards} />
        </div>
      </div>
      <div>
        <Section />
        <div className='cards'>
          {card.map((card, index) => (
            <div key={index} className='innerCard'>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <ScrollTop />
      </div>
    </div>


  );
}

export default App;
