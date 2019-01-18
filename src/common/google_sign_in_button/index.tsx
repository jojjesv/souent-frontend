import * as React from 'react';

let mountedButtons: GoogleSignInButton[] = []

function setupAllMountedButtons() {
  console.log("setupAllMountedButtons")
  mountedButtons.forEach(btn => btn.setupGoogleButton());
}

(window as any).setupAllMountedButtons = setupAllMountedButtons;

document.write('<script src="https://apis.google.com/js/platform.js?onload=setupAllMountedButtons" async defer></script>')

/**
 * Default Google sign-in button.
 * @author Johan Svensson
 */
export default class GoogleSignInButton extends React.PureComponent {
  buttonId = 'gbtn-' + Date.now();

  componentDidMount() {
    mountedButtons.push(this);
  }

  componentWillUnmount() {
    try {
      mountedButtons.splice(mountedButtons.indexOf(this), 1);
    } catch (e) { }
  }

  setupGoogleButton() {
    //@ts-ignore
    gapi.signin2.render(this.buttonId, {
      scope: 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': () => {
        console.log("BTN on success");
      },
      'onfailure': () => {
        console.log("BTN on failure");
      }
    })
  }

  render() {
    let { buttonId } = this;

    return (
      <h2 id={buttonId}>

      </h2>
    )
  }
}

