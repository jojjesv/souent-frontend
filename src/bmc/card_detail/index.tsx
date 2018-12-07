import * as React from 'react';
import BMCCard from '../../models/BMCCard';
import './styles.scss';

interface Props {
  visible: boolean;
  data: BMCCard;
  onRequestClose: () => void;
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
      <div className="card-detail" onClick={() => props.onRequestClose()}>
        <div className="base" onClick={e => e.stopPropagation()}>
          <div className="options">
            <ul>
              <li>
                <button className="reset" onClick={() => props.onRequestClose()}>
                  <img className="btn-icon" alt="Close" src={"../assets/images/ic_close.png"} />
                </button>
              </li>
              <li>
                <button className="reset">
                  <img className="btn-icon" alt="Edit" src={"../assets/images/ic_edit.png"} />
                </button>
              </li>
            </ul>
          </div>
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