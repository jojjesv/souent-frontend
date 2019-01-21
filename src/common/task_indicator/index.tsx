import * as React from 'react';

import './styles.scss';
import classNames from 'classnames';

interface Props {
  /**
   * Whether to position this task indicator center on screen.
   */
  fullscreen?: boolean;
}

/**
 * A simple task indicator.
 * @author Johan Svensson
 */
export default class TaskIndicator extends React.Component<Props> {
  render() {
    let { props } = this;

    return (
      <div className={classNames({
        "task-indicator": true,
        "fullscreen": props.fullscreen
      })} role="img" style={{
        backgroundImage: `url(/assets/images/spinner.gif)`
      }}>
      </div >
    )
  }
}