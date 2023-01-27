import React from "react";
import "./index.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CardList } from "./components/CardList";
import { Instructions } from "./components/Instructions";

function App() {
  const [cardsList, setCardsList] = React.useState([]);

  const generateNumber = (maxNumber = 100) => {
    let random = Math.random() * maxNumber;
    return random;
  };

  const addCard = () => {
    let num = Math.floor(generateNumber());
    if (cardsList.includes(num, cardsList)) {
      console.log(num);
    } else {
      setCardsList((prev) => [...prev, num]);
    }
  };

  const deleteCard = (number) => {
    setCardsList((prev) => prev.filter((item) => item !== number));
    console.log(`Number ${number} was deleted.`)
  };

  const sortCards = () => {
    setCardsList((prev) => [...prev].sort((a, b) => a - b ))
  };

  return (
    <div className="App">
      <Header addCard={addCard} sortCards={sortCards} />
      <div style={{ display: "flex" }}>
        <CardList cardList={cardsList} deleteCard={deleteCard} />
        <Instructions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
