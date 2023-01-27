import React from 'react';
import "../index.scss";

export const Header = ({addCard, sortCards}) => {

  return (
    <header>
      <button onClick={addCard}>Add Card</button>
      <button onClick={sortCards}>Sort Cards</button>
    </header>
  )
}
