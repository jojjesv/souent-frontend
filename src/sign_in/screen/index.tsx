import * as React from 'React';
import * as googleapis from "googleapis";
import './google_auth_handler';
import { authWithAccessToken as authWithAccessTokenService } from './service';


/**
 * Screen used for signing in.
 */
export default class SignInScreen extends React.Component {


  
  render() {
    return (
      <div className="g-signin2" data-onsuccess="onGoogleSignedIn">
        <h1>Sign in with Google</h1>
      </div>
    )
  }

  componentDidMount() {
    (window as any).onGoogleSignedInListeners.add(this.onSignIn);
  }

  componentWillUnmount(){
    (window as any).onGoogleSignedInListeners.delete(this.onSignIn);
  }

  onSignIn = (googleuser) => {
    let id_token = googleuser.getAuthResponse().id_token;    
    authWithAccessTokenService(id_token).then(() => this.onObtainedAuthToken())
  }

  onObtainedAuthToken() {
    this.continue();
  }

  /**
   * Continues to some other screen after signing up.
   */
  continue() {
  }
}