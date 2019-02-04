import * as React from 'react'
import Enterprise from '../../models/Enterprise';
import { fetchEnterprises } from './service';
import TaskIndicator from '../../common/task_indicator';
import CardList from '../../common/card_list'
import './desktop.scss'
import { Link } from 'react-router-dom';
import SideMenu from '../../common/side_menu';
import { docTitle } from '../../utils';

class State {
  fetchingEnterprises = false;
  enterprises: Enterprise[] = [];
  sideMenuOpen = false;
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
    document.title = docTitle("Enterprises")
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
        <header className="enterprises-header fixed">
          <Link to="/enterprise/new">
            <span className="fas fa-plus"></span>
          </Link>
          <h1 className="frontpage-header">Social Enterprise hub</h1>
          <a role="button" onClick={() => this.setState({
            sideMenuOpen: true
          })}>
            <span className="fas fa-bars"></span>
          </a>
        </header>
        {
          state.fetchingEnterprises ? (
            <TaskIndicator fullscreen />
          ) : (
              <CardList
                className="enterprise-list"
                openLinkHref={d => {
                  console.log("d: ", d)
                  return `/bmc/${d.id}`
                }}
                data={state.enterprises.map(enterprise => {
                  console.log("enterprise: ",enterprise)
                  return {
                    id: enterprise.id,
                    logoUrl: enterprise.logoUrl,
                    title: enterprise.name,
                    htmlPreviewContent: enterprise.businessIdea
                  }
                })} />
            )
        }

        <SideMenu
          open={state.sideMenuOpen}
          onRequestClose={() => this.setState({
            sideMenuOpen: false
          })} />
      </div>
    )
  }
}