import * as React from 'react';
import classNames from 'classnames';
import GoogleSignInButton from '../google_sign_in_button';
import './styles.scss';

interface Props {
  open: boolean;
  onRequestClose: () => void;
}

/**
 * An expandable side menu.
 * @author Johan Svensson
 */
export default class SideMenu extends React.Component<Props> {
  render() {
    let { props } = this;

    return (
      <div className={classNames({
        "side-menu-container": true,
        "open": props.open
      })}
        onClick={props.onRequestClose}>
        <div className="side-menu" onClick={e => e.stopPropagation()}>
          <h1 className="app-title">
            Souent
            <span className="slogan">Social entrepreneour hub</span>
          </h1>
          <GoogleSignInButton />
        </div>
      </div>
    )
  }
}