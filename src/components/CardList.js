import React from "react";

export const CardList = (props) => {

  return (
    <div className="cardList">
      {props.cardList.map((number) => {
        return (
          <div className="card" key={number}>
            <div className="card-close">
              <img
                style={{ cursor: "pointer" }}
                width={16}
                height={16}
                src="/img/delete.png"
                alt="closeBtn"
                onClick={() => props.deleteCard(number)}
              />
            </div>
            <h1>{number}</h1>
          </div>
        );
      })}
    </div>
  );
};
