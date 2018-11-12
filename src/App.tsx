import * as React from 'react';
import CardList from './common/card_list';

/**
 * Top level app component.
 * @author Johan Svensson
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <CardList
          data={[
            {
              header: 'Card 1'
            }
          ]}
        />
      </div>

    )
  }
}