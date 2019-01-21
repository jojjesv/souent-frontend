import * as React from 'react';
import Enterprise from '../../models/Enterprise';

interface Props {
  enterprise: Enterprise;
}

/**
 * Presents basic enterprise info.
 * @author Johan Svensson
 */
export default class EnterpriseInfoHeader extends React.PureComponent<Props> {
  render() {
    let { props } = this;
    let { enterprise } = props;

    return (
      <header className="enterprise-info">
        <div className="logo" style={{
          backgroundImage: `url(${enterprise.logoUrl})`
        }}>
        </div>
        <h1 className="title">{enterprise.name}</h1>
      </header>
    )
  }
}