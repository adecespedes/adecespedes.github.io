import React from "react";
import { Button } from "./Button";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="cards">
        <img src="/images/TESTIMONIOS.png" />
      </div>
      <div className="cards-container">
        <h1>Quiam hiliquae venis da quidemp orereptas moles venem</h1>
        <p>
          Alicatist anima es es auditatibus, occusdadam ressit ute denis sus
          endia cusa videm laborehentia nis ipsae doles coresci con nonsequi que
          ex et explibusant omnihit, sapictis esciis quasi quia adiore eum
          sitiur? Quiam hiliquae venis cus doluptiaes nihil in earia pore
          volorum volenim quideli quaest, totaquasit aut es eiciam corem quos
          eicatur, nest at repratio quaecto taspien duciistibusa cone persperum
          quatur maximen destrum ut liquas si consed quam resero magniscia cusda
          idellec eperibus ad quidus ex eos et quunt autest quisima.
        </p>
        <div className="cards-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            GANAR HOY
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cards;
