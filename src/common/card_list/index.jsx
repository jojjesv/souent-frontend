import React from "react";
import Card from "../card";

export default class CardList extends React.Component {
  render() {
    let props = this.props;

    /** @type {} */
    let data;

    let cards = [];
    for (let i = 0; i < deckF.length; i++) {
      cards.push(<Card key={i} id={i} ch={this.props.cHeight} deg={"rotate(" + this.props.imgDeg + "deg)"} cimg={`assets/images/${this.cardType(i)}.jpg`} dt={this.props.dTop + i * this.props.dAdd} htext={deckF[i].h} ptext={deckF[i].p} />);
    }
    return (
      <div className="content_con">
        {cards}
      </div>
    )
  }
  cardType(i) {
    if (i % 4 == 0) {
      return "spader";
    }
    else if (i % 4 == 1) {
      return "jater";
    }
    else if (i % 4 == 2) {
      return "klover";
    }
    else if (i % 4 == 3) {
      return "ruter";
    }
  }
}

