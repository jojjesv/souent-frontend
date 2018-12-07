import * as React from 'react';
import BMCCard from '../../models/BMCCard';
import './styles.scss';

interface Props {
  visible: boolean;
  data: BMCCard;
}

class State {
  fullyVisible: boolean;
}

/**
 * Modal detail view for a card.
 * @author Johan Svensson
 */
export default class CardDetailModal extends React.Component<Props, State> {
  state = new State();

  render() {
    let { props } = this;

    if (!props.visible) {
      return null;
    }

    let { data } = props;

    return (
      <div className="card-detail">
        <div className="base">
          <div className="header-container">
            <img alt="symbol" className="symbol" />
            <h1 className="header">{data.title}</h1>
          </div>
          <div className="html-content" dangerouslySetInnerHTML={{ __html: data.htmlContent }}>

          </div>
        </div>
      </div>
    )
  }
}