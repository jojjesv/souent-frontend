import * as React from 'react';

export interface ModalProps {
  visible?: boolean;
}

/**
 * A base modal component.
 * @author Johan Svensson
 */
export default class ModalComponent extends React.Component {
  /**
   * Renders content as a direct child of the modal background.
   */
  renderExtra() {
    return null;
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-content">

        </div>
        <div className="modal-extra">
          {
            this.renderExtra()
          }
        </div>
      </div>
    )
  }
}