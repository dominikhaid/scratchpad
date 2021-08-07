import React, {Component} from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

/**
 * @desc Main App Context
 */
class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  state = {
    user: {},
    products: [],
    card: {
      products: [],
    },
    updateState: state => {
      this.setState(state);
    },
    updateCard: arr => {
      //REMOVE ITEM WITH GIVEN ID
      if (typeof arr === 'object' && arr.action === 'remove') {
        let uptItems = this.state.card.products.filter(e => {
          if (e.id === arr.id) return false;
          return true;
        });
        this.setState({card: {products: uptItems}});

        sessionStorage.setItem('card', JSON.stringify({products: uptItems}));
        return true;
      }

      //UPDATE GIVEN ID QUANTITY
      if (typeof arr === 'object' && arr.action === 'add' && arr.quantity > 0) {
        let uptItems = this.state.card.products.find(e => e.id === arr.id);
        uptItems.quantity = arr.quantity;

        this.setState({
          card: {
            products: this.state.card.products.map(e => {
              if (e.id === uptItems.id) return uptItems;
              return e;
            }),
          },
        });

        sessionStorage.setItem(
          'card',
          JSON.stringify({
            products: this.state.card.products.map(e => {
              if (e.id === uptItems.id) return uptItems;
              return e;
            }),
          }),
        );
        return true;
      }

      //UPDATE CARD ARRAY WITH GIVEN ARRAY
      if (this.state.card.products.length === 0 && Array.isArray(arr)) {
        this.setState({card: {products: arr}});

        sessionStorage.setItem('card', JSON.stringify({products: arr}));
        return true;
      }

      if (Array.isArray(arr)) {
        let uptItems = [...this.state.card.products, ...arr];

        if (uptItems.length < 1) {
          this.setState({card: {products: []}});

          sessionStorage.setItem('card', JSON.stringify({products: []}));
          return true;
        }

        if (uptItems) {
          this.setState({card: {products: uptItems}});
          sessionStorage.setItem('card', JSON.stringify({products: uptItems}));
        }
        return true;
      }
      sessionStorage.setItem(
        'card',
        JSON.stringify({products: this.state.card.products}),
      );
      return true;
    },
  };

  render() {
    const {children} = this.props;
    {
      return (
        <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
      );
    }
  }
}

export {AppContext, AppProvider};
