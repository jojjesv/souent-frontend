import * as React from 'react';
import MemberData from './models/MemberData';
import * as FormData from 'form-data'
import { submitEnterprise } from './service';

class State {
  members: MemberData[];
  busySubmitting: boolean;
}

/**
 * Form for creating an enterprise.
 * @author Johan Svensson
 */
export default class EnterpriseForm extends React.PureComponent<any, State> {
  state = new State();

  /**
   * Submits the form, uses the service to request to create a new enterprise.
   */
  async submit() {
    let { state } = this;

    if (state.busySubmitting) {
      //  Already submitting
      return;
    }

    this.setState({
      busySubmitting: true
    });

    // @ts-ignore
    let formData = new FormData(document.getElementById('enterprise-add-form'));

    let result = await submitEnterprise(formData);

    this.setState({
      busySubmitting: false
    })
  }

  addMember() {

  }

  removeMemberAt(index: number) {

  }

  render() {
    let { state } = this;

    return (
      <div>
        <form id="enterprise-add-form">
          <fieldset className="fieldset">
            <div>
              <input type="file" name="logo" id="input-logo" />

              <div id="logo-preview" className="fill">
                <p id="logo-upload-hint">Upload your logo</p>
              </div>
              <label htmlFor="input-logo" id="input-logo-ref" className="fill"></label>
            </div>
            <input
              id="input-enterprise-id"
              type="text"
              name="name"
              placeholder="Name of your enterprise"
            />
            <input
              id="input-enterprise-business-idea"
              className="multiline"
              type="text"
              name="business-idea"
              placeholder="Describe your business idea"
            />
          </fieldset>
          <fieldset id="" className="fieldset">
            <h2>Members</h2>
            <p>Members may edit this enterprise's business model canvas (BMC) info.</p>

            <div>
              <ul id="members-list">
                {
                  state.members.map((member, i) => (
                    <li>
                      <div>
                        <span className="fas fa-envelope"></span>
                      </div>
                      <div>
                        <input
                          defaultValue={member.email}
                          type="email"
                          onChange={e => {
                            member.email = e.currentTarget.value.trim();
                          }} />
                      </div>
                      <div>
                        <span className="fas fa-minus-circle"></span>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div>
                <button onClick={() => this.addMember()}>
                  Add member
                </button>
              </div>
            </div>
          </fieldset>
          <div>
            <button onClick={e => {
              e.preventDefault();
              this.submit();
            }}>
              Create enterprise
            </button>
          </div>
        </form>
      </div>
    )
  }
}