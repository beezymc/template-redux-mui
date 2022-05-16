import { connect } from 'react-redux';
import App from '../../App.js';
import decrementCount from '../actions/decrementCount.js';
import incrementCount from '../actions/incrementCount.js';
import resetCount from '../actions/resetCount.js';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrementCount: (count) => dispatch(decrementCount(count)),
    incrementCount: (count) => dispatch(incrementCount(count)),
    resetCount: () => dispatch(resetCount())
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;