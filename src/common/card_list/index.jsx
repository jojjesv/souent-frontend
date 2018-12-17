import React from "react";
import Card from "../card";
import classNames from 'classnames';

export default class CardList extends React.Component {
  render() {
    let props = this.props;

    //  Array of card data
    let cardsData = props.data;

    let cards = [];
    for (let i = 0; i < cardsData.length; i++) {
      cards.push((
        <div className="card-container-single">
          <Card
            key={i}
            id={i}
            ch={this.props.cHeight}
            deg={"rotate(" + this.props.imgDeg + "deg)"}
            cimg={`assets/images/${this.cardType(i)}.jpg`}
            dt={this.props.dTop + i * this.props.dAdd}
            htext={cardsData[i].title}
            onOpen={() => props.onCardOpen(cardsData[i], i)}
            ptext={cardsData[i].htmlPreviewContent} />
        </div>
      ));
    }
    return (
      <div className={classNames(["card-list", props.className])}>
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

