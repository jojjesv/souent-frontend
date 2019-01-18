import * as React from 'react';
import { fetchAuthToken } from './service';

let mountedButtons: GoogleSignInButton[] = []

function setupAllMountedButtons() {
  console.log("setupAllMountedButtons");
  gapiIsSetup = true;
  mountedButtons.forEach(btn => btn.setupGoogleButton());
}

let gapiIsSetup = false;
(window as any).setupAllMountedButtons = setupAllMountedButtons;

document.write('<script src="https://apis.google.com/js/platform.js?onload=setupAllMountedButtons" async defer></script>')

class State {
  fetchingAuthToken = false;
}

/**
 * Default Google sign-in button.
 * @author Johan Svensson
 */
export default class GoogleSignInButton extends React.Component<any, State> {
  state = new State();

  buttonId = 'gbtn-' + Date.now();

  componentDidMount() {
    mountedButtons.push(this);
    if (gapiIsSetup) {
      //  OK now to setup
      this.setupGoogleButton();
    }
  }

  componentWillUnmount() {
    try {
      mountedButtons.splice(mountedButtons.indexOf(this), 1);
    } catch (e) { }
  }

  onSignedIn(gUser) {
    let accessToken = gUser.getAuthResponse().id_token;
    this.fetchAuthToken(accessToken);
  }

  async fetchAuthToken(accessToken: string) {
    let { state } = this;
    if (state.fetchingAuthToken) {
      return;
    }

    this.setState({
      fetchingAuthToken: true
    });

    let token = await fetchAuthToken(accessToken);
    console.log("[GoogleSignInButton] retrieved auth token:", token);

    this.setState({
      fetchingAuthToken: false
    });
  }

  setupGoogleButton() {
    //@ts-ignore
    gapi.signin2.render(this.buttonId, {
      scope: 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignedIn.bind(this),
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

