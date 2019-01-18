import * as React from 'react';

import MemberData from "../models/MemberData";

interface Props {
  onRemove: () => void;
  member: MemberData;
  isMe?: boolean;
  onChange?: any;
  index: number;
  name?: string;
}

/**
 * Item of a list of to-be members.
 * @author Johan Svensson
 */
export default function (props: Props) {
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
          key={`member-email-input-${index}`}
          required={true}
          disabled={isMe}
          name={props.name}
          onChange={e => {
            member.email = e.currentTarget.value.trim();
            if (typeof props.onChange == "function") {
              props.onChange();
            }
          }} />
      </div>
      <div>
        {
          !isMe ? (
            <button
              className="remove-member"
              onClick={e => {
                e.preventDefault();
                props.onRemove();
              }}>
              <span className="fas fa-minus-circle"></span>
            </button>
          ) : null
        }
      </div>
    </li>
  )
}