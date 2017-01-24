import { connect } from 'react-redux';
import { callPaneSelect } from '../actions';
import NavBarComponent from '../components/NavBarComponent';


const mapStateToProps = (state) => {
  return {
    paneItemsArray: state.navPaneState.paneItemsArray,
    color: state.themeState.accentColor,
    theme: state.themeState.theme,
    selectedPane: state.navPaneState.selectedPane
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPaneSelect: (name) => {
      dispatch(callPaneSelect(name));
    }
  }
}

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent)

export default NavBar;