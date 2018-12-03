import * as React from 'react';
import MemberData from './models/MemberData';
import * as FormData from 'form-data'
import { submitEnterprise } from './service';
import classNames from 'classnames';
import './styles.scss';

class State {
  members: MemberData[] = [];
  busySubmitting: boolean;
  logoSrc: string;
  formValid: boolean = false;
}

let maxMemberCount = 5;

/**
 * Form for creating an enterprise.
 * @author Johan Svensson
 */
export default class EnterpriseForm extends React.Component<any, State> {
  state = new State();
  formRef: HTMLFormElement;

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

    let formElement = this.formRef;

    // @ts-ignore
    let formData = new FormData(formElement);

    // @ts-ignore
    let result = await submitEnterprise(formData);

    this.setState({
      busySubmitting: false
    })
  }

  addMember() {
    this.setState(o => {
      o.members.push(new MemberData());
      console.log("Members: ", o.members);
      return o;
    })
  }

  removeMemberAt(index: number) {
    console.log("INDEX: ", index);
    this.setState(o => {
      o.members.splice(index, 1);
      return o;
    })
  }

  onLogoFileChanged(file: File) {
    if (!file) {
      console.log("[enterprise_form] canceled logo file upload")
      return;
    }

    let reader = new FileReader();
    reader.onload = () => {
      this.onLogoChanged(reader.result as string);
    };
    reader.readAsDataURL(file);

    this.checkFormValidity();
  }

  onLogoChanged(src: string) {
    this.setState({
      logoSrc: src
    })
  }

  /**
   * Checks form validity, alters the state if the validity state changed.
   */
  checkFormValidity() {
    let formElement = this.formRef;

    let valid = formElement.checkValidity();
    console.log("checkFormValidity", valid)

    let { state } = this;
    if (state.formValid != valid) {
      this.setState({
        formValid: valid
      })
    }
  }

  render() {
    let { state } = this;

    return (
      <div>
        <form id="enterprise-add-form"
          ref={e => this.formRef = e}>
          <div className="section fieldsets">
            <fieldset className="fieldset">
              <h2 className="title is-4 is-centered">Basic info</h2>
              <div>
                <label>
                  <input type="file" name="logo" id="input-logo"
                    onChange={e => this.onLogoFileChanged(e.currentTarget.files[0])} />

                  <div id="logo-preview"
                    className="fill"
                    style={state.logoSrc ? {
                      backgroundImage: `url(${state.logoSrc})`
                    } : null}>
                    <p id="logo-upload-hint">Upload your logo</p>
                  </div>
                </label>
              </div>
              <div>
                <input
                  id="input-enterprise-name"
                  type="text"
                  maxLength={30}
                  onChange={() => this.checkFormValidity()}
                  name="name"
                  className="input"
                  required={true}
                  placeholder="Name of your enterprise"
                />
              </div>
              <div>
                <input
                  id="input-enterprise-business-idea"
                  className="input multiline"
                  type="text"
                  onChange={() => this.checkFormValidity()}
                  maxLength={100}
                  name="business-idea"
                  required={true}
                  placeholder="Describe your business idea"
                />
              </div>
            </fieldset>
            <fieldset id="" className="fieldset">
              <h2 className="title is-4 is-centered">
                Members{state.members.length > 0 ? ` (${state.members.length + 1})` : ''}
              </h2>
              <p className="subtitle is-6">
                Members may edit this enterprise's business model canvas (BMC) info.
              </p>

              <div>
                <ul id="member-list">
                  {
                    [{ email: 'jojjedeveloper@gmail.com' }].concat(state.members).map((member, i) => {
                      let isMe = i == 0;

                      return (
                        <li className="member-item" key={member.email} ref={e => { }}>
                          <div>
                            <span className="fas fa-envelope"></span>
                          </div>
                          <div>
                            <input
                              className="input"
                              ref={e => e && (e.value = `${member.email || ""}${isMe ? " (me)" : ""}`)}
                              type="email"
                              required={true}
                              disabled={isMe}
                              name={`member${i}`}
                              onChange={e => {
                                member.email = e.currentTarget.value.trim();
                                this.checkFormValidity();
                              }} />
                          </div>
                          <div>
                            {
                              !isMe ? (
                                <button
                                  className="remove-member"
                                  onClick={e => {
                                    e.preventDefault();
                                    this.removeMemberAt(i - 1);
                                  }}>
                                  <span className="fas fa-minus-circle"></span>
                                </button>
                              ) : null
                            }
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
                <div>
                  {
                    state.members.length < maxMemberCount - 1 ? (
                      <button
                        className="button"
                        onClick={e => {
                          e.preventDefault();
                          this.addMember();
                        }}>
                        <span className="icon is-small">
                          <i className="fas fa-plus"></i>
                        </span>
                        <span>Add member</span>
                      </button>
                    ) : null
                  }
                </div>
              </div>
            </fieldset>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button
              className={"button is-primary"}
              disabled={!state.formValid}
              onClick={e => {
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