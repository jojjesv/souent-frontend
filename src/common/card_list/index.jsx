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
            cardHeight={props.cardHeight}
            topDistance={props.topDistance + 1 * props.addDistance}
            img={`/assets/images/${i}.png`}
            headerText={cardsData[i].title}
            openLinkHref={props.openLinkHref ? props.openLinkHref(cardsData[i]) : null}
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
}

