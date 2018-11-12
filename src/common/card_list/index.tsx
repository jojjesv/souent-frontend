import * as React from 'react';
require('./styles.scss');

interface Props {
  data: CardListItemData[];
}

class State {

}

/**
 * A view for scrolling a list of overlapping cards.
 * @author Johan Svensson
 */
export default class CardList extends React.Component<Props, State> {
  render() {
    let { props, state } = this;
    let { data } = props;

    return (
      <div className="card-list">
        {
          data.map((item, i) => (
            <div className="item">
              {
                item.header ? (
                  <h3>{item.header}</h3>
                ) : null
              }
              <p>

              </p>
            </div>
          ))
        }
      </div>
    )
  }
}

export class CardListItemData {
  constructor(
    public header: string
  ) {

  }
}