import * as React from 'react';
import EnterpriseForm from '..';
import { docTitle } from '../../utils';

/**
 * Screen containing form for creating an enterprise.
 * @author Johan Svensson
 */
export default class EnterpriseFormScreen extends React.Component {
  componentDidMount() {
    document.title = docTitle("New enterprise")
  }
  
  render() {
    return (
      <div>
        <EnterpriseForm />
      </div>

    )
  }
}