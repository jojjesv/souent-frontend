import React from "react";
import Card from "../card";
import classNames from 'classnames';

export default class CardList extends React.Component {
  render() {
    //  Array of card data
    let cardsData = this.props.data;

    let cards = [];
    for (let i = 0; i < cardsData.length; i++) {
      cards.push((
        <div className="card-container-single">
          <Card
            key={i}
            cardHeight={this.props.cardHeight}
            topDistance={this.props.topDistance + 1 * this.props.addDistance}
            img={`assets/images/${this.cardType(i)}.jpg`}
            headerText={cardsData[i].title}
            open={() => props.onCardOpen(cardsData[i], i)}
            paragraphText={cardsData[i].htmlPreviewContent} />
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
    }
}

