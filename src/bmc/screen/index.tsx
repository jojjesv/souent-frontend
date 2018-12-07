import * as React from 'react';
import { fetchBmc } from './service';
import BMCCard from '../../models/BMCCard';
import { RouteComponentProps } from 'react-router';
import CardList from '../../common/card_list/index.jsx'
import CardDetailModal from '../card_detail';

class State {
  busyFetchingBmc = false;
  cards: BMCCard[] = [];
  cardDetailVisible: boolean;

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
   * Fetches the BMC cards to show.
   */
  async fetch(enterpriseId: string) {
    let { state } = this;
    if (state.busyFetchingBmc) {
      //  Already fetching
      return;
    }

    this.setState({
      busyFetchingBmc: true
    });

    let result = await fetchBmc(enterpriseId);

    this.setState({
      cards: result,
      busyFetchingBmc: false
    });
  }

  render() {
    let { state } = this;

    return (
      <div>
        {
          state.busyFetchingBmc ? (
            <div>
            </div>
          ) : state.cards.length ? (
            <CardList
              data={state.cards}
              onCardOpen={data => this.setState({ cardDetailData: data, cardDetailVisible: true })}
            />
          ) : null
        }
        <CardDetailModal
          visible={state.cardDetailVisible}
          data={state.cardDetailData}
        />
      </div>
    )
  }
}