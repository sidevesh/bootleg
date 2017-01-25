// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContentComponent from '../components/MainContentComponent';

const mapStateToProps = (state) => {
  return {
    selectedPane: state.navPaneState.selectedPane
  }
}

//const mapDispatchToProps = (dispatch) => {
//  return {
//    onPaneSelect: (name) => {
//      dispatch(callPaneSelect(name));
//    }
//  }
//}

const MainContent = connect(
  mapStateToProps
)(MainContentComponent)

export default MainContent;