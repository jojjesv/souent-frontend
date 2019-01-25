import * as React from 'react';
import BMCCard from '../../models/BMCCard';
import './styles.scss';
import classNames from 'classnames';
import { timeDiff, timeUnits } from '../../utils';
import { updateBMCCard } from '../service';
import TaskIndicator from '../../common/task_indicator';

interface Props {
  visible: boolean;

  /**
   * Used for updating BMC card (required prop)
   */
  enterpriseId: string;
  data: BMCCard;
  onRequestClose: () => void;
}

class State {
  fullyVisible: boolean;
  dismissing: boolean;
  editMode: boolean;
  saveBusy: boolean;
}

/**
 * Modal detail view for a card.
 * @author Johan Svensson
 */
export default class CardDetailModal extends React.Component<Props, State> {
  state = new State();
  contentRef: HTMLTextAreaElement

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
      let mutableState = this.state;
      mutableState.saveBusy = false;
      mutableState.editMode = false;
      mutableState.dismissing = false;
      this.props.onRequestClose();
    }, animDuration);
  }

  toggleEditMode() {
    this.setState((o: State) => {
      o.editMode = !o.editMode
      return o
    })
  }

  /**
   * Saves the changes from edit mode.
   */
  async saveChanges() {
    let { state, props, contentRef } = this;
    if (state.saveBusy) {
      //  Busy
      return;
    }

    let { data } = props;

    this.setState({
      saveBusy: true
    })

    let newContent = contentRef.value.trim()

    await updateBMCCard(props.enterpriseId, data.id, {
      content: newContent
    });

    data.htmlContent = newContent
    
    this.setState({
      saveBusy: false,
      editMode: false,
    })
  }

  render() {
    let { props, state } = this;

    if (!props.visible) {
      return null;
    }

    let { data } = props;

    let lastEditDiff = data.lastEdit ? timeDiff(data.lastEdit.getTime()) : null

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
              {
                !state.editMode ? (
                  <li>
                    <button className="reset" onClick={() => this.toggleEditMode()}>
                      <img className="btn-icon" alt="Edit" src={"../assets/images/edit-icon.png"} />
                    </button>
                  </li>
                ) : (
                    <li className="edit-mode-save-container">
                      <button
                        className="reset"
                        disabled={state.saveBusy}
                        onClick={() => this.saveChanges()}
                        style={state.saveBusy ? {
                          visibility: 'hidden'
                        } : null}>
                        <img className="btn-icon" alt="Save" src={"../assets/images/check-icon.png"} />
                      </button>
                      {
                        state.saveBusy ? (
                          <TaskIndicator />
                        ) : null
                      }
                    </li>
                  )
              }
            </ul>
          </div>
          <div className="header-container">
            <img alt="symbol" className="symbol" />
            <h1 className="header">{data.title}</h1>
          </div>
          <textarea
            ref={e => this.contentRef = e}
            disabled={!state.editMode}
            className="html-content input"
            placeholder="No content yet! Edit away.">
            {
              data.htmlContent
            }
          </textarea>
          <div className="last-edit-container">
            <p className="text">
              {
                lastEditDiff ? `Last edited ${lastEditDiff.delta} ${timeUnits[lastEditDiff.unit]} ago` :
                  "Not edited yet"
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}