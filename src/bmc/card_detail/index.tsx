import * as React from 'react';
import BMCCard from '../../models/BMCCard';

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

    return (
      <div className="modal">
        <div>
          
        </div>
      </div>
    )
  }
}