import * as React from 'react';
import { fetchBMCCards } from '../service';
import BMCCard from '../../models/BMCCard';
import { RouteComponentProps } from 'react-router';
import CardList from '../../common/card_list/index.jsx'
import CardDetailModal from '../card_detail';
import { Link } from 'react-router-dom';
import TaskIndicator from '../../common/task_indicator';
import Enterprise from '../../models/Enterprise';
import EnterpriseHeader from '../desktop/enterprise_header';
import EnterpriseInfoHeader from './EnterpriseInfoHeader';
import './styles.scss';
import Members from './Members';
import { docTitle } from '../../utils';

class State {
  //  Is initially fetching
  busyFetching = true;
  bmc: BMCCard[] = [];

  //  Basic enterprise info
  enterprise: Enterprise;
  members?: { email: string }[];
  cardDetailVisible: boolean;
  editable = false;

  //  Current card data for card detail view
  cardDetailData: BMCCard;
}

interface Props extends RouteComponentProps {

}

/**
 * Top level screen for showing an enterprise BMC.
 * @author Johan Svensson
 */
export default class BMCScreen extends React.Component<Props, State> {
  state = new State();

  componentDidMount() {
    document.title = docTitle("BMC")
    this.fetchWithPathParam();
  }

  /**
   * Invokes fetch() with the enterprise ID present in the path.
   */
  async fetchWithPathParam() {
    let { props } = this;

    // @ts-ignore
    let enterpriseId: string = props.match.params.enterpriseId;
    await this.fetch(enterpriseId);
  }

  /**
   * Fetches basic info and the BMC cards to show.
   */
  async fetch(enterpriseId: string) {
    let { state } = this;

    this.setState({
      busyFetching: true
    });

    let result = await fetchBMCCards(enterpriseId);

    document.title = docTitle(result.enterprise.name, "BMC")

    this.setState({
      ...result,
      busyFetching: false,
      members: result.members
    });
  }

  render() {
    let { state, props } = this;

    let enterpriseId = state.enterprise ? state.enterprise.id : null

    return (
      <div>
        <header className="enterprises-header fixed reverse">
          <Link to="../">
            <span className="fas fa-chevron-left"></span>
          </Link>
        </header>
        {
          state.busyFetching ? (
            <div>
              <TaskIndicator fullscreen />
            </div>
          ) : (
              <div>
                <EnterpriseInfoHeader enterprise={state.enterprise} />
                <CardList
                  data={state.bmc}
                  className="bmc"
                  onCardOpen={data => this.setState({ cardDetailData: data, cardDetailVisible: true })}
                />

                {
                  state.members ? (
                    <Members members={state.members} />
                  ) : null
                }
              </div>
            )
        }
        <CardDetailModal
          visible={state.cardDetailVisible}
          data={state.cardDetailData}
          enterpriseId={enterpriseId}
          editable={state.editable}
          onRequestClose={() => this.setState({ cardDetailVisible: false })}
        />
      </div>
    )
  }
}