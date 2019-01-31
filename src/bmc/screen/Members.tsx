import * as React from 'react';

interface Props {
  members: { email: string }[];
}

export default class extends React.PureComponent<Props> {
  render() {
    let { props } = this;
    let { members } = props;

    return (
      <ul className="member-list">
        {
          members.map(member => (
            <li>
              <p className="email">
              {
                member.email
              }
              </p>
            </li>
          ))
        }
      </ul>
    )
  }
}