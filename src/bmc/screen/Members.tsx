import * as React from 'react';
import './styles.scss';

interface Props {
  members: { email: string }[];
}

export default class extends React.PureComponent<Props> {
  render() {
    let { props } = this;
    let { members } = props;

    return (
      <div className="member-list">
        <h3>Contact us: </h3>
        <ul>
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
      </div>
    )
  }
}