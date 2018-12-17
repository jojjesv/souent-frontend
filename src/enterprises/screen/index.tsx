import * as React from 'react'
import Enterprise from '../../models/Enterprise';
import { fetchEnterprises } from './service';
import TaskIndicator from '../../common/task_indicator';
import CardList from '../../common/card_list'

class State {
  fetchingEnterprises = false;
  enterprises: Enterprise[] = [];
}

interface Props {

}

/**
 * Top level screen component for the list of enterprises.
 * @author Johan Svensson
 */
export default class EnterprisesScreen extends React.Component<Props, State> {
  state = new State();

  componentDidMount() {
    this.fetchEnterprises();
  }

  /**
   * Fetches all enterprises.
   */
  async fetchEnterprises() {
    let { state } = this;
    if (state.fetchingEnterprises) {
      return;
    }

    this.setState({
      fetchingEnterprises: true
    });

    let enterprises = await fetchEnterprises();

    this.setState({
      fetchingEnterprises: false,
      enterprises
    })
  }

  render() {
    let { state } = this;

    return (
      <div>
        {
          state.fetchingEnterprises ? (
            <TaskIndicator />
          ) : (
              <CardList
                className="enterprise-list"
                data={state.enterprises.map(enterprise => {
                  return {
                    title: enterprise.name,
                    htmlPreviewContent: enterprise.businessIdea
                  }
                })} />
            )
        }
      </div>
    )
  }
}