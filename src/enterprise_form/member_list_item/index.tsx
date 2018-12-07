import * as React from 'react';

import MemberData from "../models/MemberData";

/**
 * Item of a list of to-be members.
 * @author Johan Svensson
 */
export default function (props: { member: MemberData, isMe?: boolean, onChange?: any, index: number }) {
  let { member, isMe, onChange, index } = props;

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
          name={`member${index}`}
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
                this.removeMemberAt(index - 1);
              }}>
              <span className="fas fa-minus-circle"></span>
            </button>
          ) : null
        }
      </div>
    </li>
  )
}