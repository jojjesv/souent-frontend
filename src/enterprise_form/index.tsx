import * as React from 'react';
import MemberData from './models/MemberData';
import * as FormData from 'form-data'
import { submitEnterprise } from './service';
import classNames from 'classnames';
import './styles.scss';
import MemberListItem from './member_list_item';
import {
  Redirect, Link
} from 'react-router-dom';
import Notification from 'jojje-react-notification';

class State {
  additionalMembers: MemberData[] = [];
  busySubmitting: boolean;
  submitted: boolean = false;
  createdEnterpriseId: boolean = false;
  logoSrc: string;
}

let maxMemberCount = 5;

/**
 * Form for creating an enterprise.
 * @author Johan Svensson
 */
export default class EnterpriseForm extends React.Component<any, State> {
  state = new State();
  formRef: HTMLFormElement;
  submitRef: HTMLButtonElement;

  formValid = false

  /**
   * Submits the form, uses the service to request to create a new enterprise.
   */
  async submit() {
    let { state } = this;

    if (false && state.busySubmitting) {
      //  Already submitting
      return;
    }

    this.setState({
      busySubmitting: true
    });

    let formElement = this.formRef;

    // @ts-ignore
    let formData = new FormData(formElement);

    try {

      // @ts-ignore
      let result = await submitEnterprise(formData);
      this.setState({
        submitted: true,
        createdEnterpriseId: result.id,
        busySubmitting: false
      })

    } catch (e) {
      console.log(e)
      Notification.showWithFirstShared("Whoops, an error occurred");

      this.setState({
        busySubmitting: false
      })
    }
  }

  addMember() {
    this.setState(o => {
      o.additionalMembers.push(new MemberData());
      console.log("Members: ", o.additionalMembers);
      return o;
    })
  }

  removeMemberAt(index: number) {
    console.log("INDEX: ", index);
    this.setState(o => {
      o.additionalMembers.splice(index, 1);
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

    if (this.formValid != valid) {
      let { submitRef } = this;

      //  Difficulties when updating state here

      if (!valid) {
        submitRef.setAttribute('disabled', 'true');
      } else {
        submitRef.removeAttribute('disabled');
      }

      this.formValid = valid;
    }
  }

  render() {
    let { state } = this;

    return (
      <div>
        <header className="fixed">
          <div></div>
          <Link to="../">
            <span className="fas fa-chevron-left"></span>
          </Link>
        </header>
        <form id="enterprise-add-form"
          onSubmit={e => {
            e.preventDefault();
            this.submit();
          }}
          ref={e => this.formRef = e}>
          <div className="section fieldsets">
            <fieldset className="fieldset">
              <h2 className="title is-4 is-centered">Basic info</h2>
              <div>
                <label>
                  <input
                    type="file"
                    name="logo"
                    id="input-logo"
                    className="hidden"
                    onChange={e => this.onLogoFileChanged(e.currentTarget.files[0])} />

                  <div id="logo-preview"
                    className="fill"
                    style={state.logoSrc ? {
                      backgroundImage: `url(${state.logoSrc})`
                    } : null}>
                    {
                      !state.logoSrc ? (
                        <p id="logo-upload-hint">Upload your logo</p>
                      ) : null
                    }
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
                  className="input is-medium is-centered"
                  required={true}
                  placeholder="Enterprise name"
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
                Members{state.additionalMembers.length > 0 ? ` (${state.additionalMembers.length + 1})` : ''}
              </h2>
              <p className="subtitle is-6">
                Members may edit this enterprise's business model canvas (BMC) info.
              </p>

              <div>
                <ul id="member-list">
                  {
                    [{ email: ((window as any).userProfileEmail as string) }].concat(state.additionalMembers).map((member, i) => (
                      <MemberListItem
                        index={i}
                        isMe={i == 0}
                        member={member}
                        name={`member-${i - 1}`}
                        key={member.email}
                        onChange={() => this.checkFormValidity()}
                        onRemove={() => this.removeMemberAt(i - 1)} />
                    ))
                  }
                </ul>
                <input type="hidden" name="additional-member-count" value={state.additionalMembers.length} />
                <div>
                  {
                    state.additionalMembers.length < maxMemberCount - 1 ? (
                      <button
                        id="add-member"
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
              className={classNames({
                "button": true,
                "is-primary": true,
                "is-loading": state.busySubmitting
              })}
              ref={e => this.submitRef = e}
              disabled={!this.formValid}>
              Create enterprise
            </button>
          </div>
        </form>
        {
          state.submitted ? (
            //  Redirect to BMC site
            <Redirect to={`/bmc/${state.createdEnterpriseId}`} />
          ) : null
        }
      </div>
    )
  }
}