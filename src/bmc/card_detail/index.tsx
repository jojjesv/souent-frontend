import * as React from 'react';
import BMCCard from '../../models/BMCCard';
import './styles.scss';
import classNames from 'classnames';

interface Props {
  visible: boolean;
  data: BMCCard;
  onRequestClose: () => void;
}

class State {
  fullyVisible: boolean;
  dismissing: boolean;
}

/**
 * Modal detail view for a card.
 * @author Johan Svensson
 */
export default class CardDetailModal extends React.Component<Props, State> {
  state = new State();

  dimiss() {
    if (this.state.dismissing) {
      //  Already dismissing
      return;
    }

    this.setState({
      dismissing: true
    });

    const animDuration = 350;

    setTimeout(() => {
      this.state.dismissing = false;
      this.props.onRequestClose();
    }, animDuration);
  }

  render() {
    let { props, state } = this;

    if (!props.visible) {
      return null;
    }

    let { data } = props;

    return (
      <div className={classNames({
        "card-detail": true,
        "dismissing": state.dismissing
      })} onClick={() => this.dimiss()}>
        <div className="base" onClick={e => e.stopPropagation()}>
          <div className="options">
            <ul>
              <li>
                <button className="reset" onClick={() => this.dimiss()}>
                  <img className="btn-icon" alt="Close" src={"../assets/images/close-icon.png"} />
                </button>
              </li>
              <li>
                <button className="reset">
                  <img className="btn-icon" alt="Edit" src={"../assets/images/edit-icon.png"} />
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