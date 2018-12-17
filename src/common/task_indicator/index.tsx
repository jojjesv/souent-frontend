import * as React from 'react';

import './styles.scss';

/**
 * A simple task indicator.
 * @author Johan Svensson
 */
export default class TaskIndicator extends React.Component {
  render() {
    return (
      <div className="task-indicator" role="img" style={{
        backgroundImage: `url(./assets/images/spinner.gif)`
      }}>
      </div>
    )
  }
}