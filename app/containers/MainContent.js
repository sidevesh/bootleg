// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContentComponent from '../components/MainContentComponent';

const mapStateToProps = (state) => {
  return {
    selectedPane: state.navPaneState.selectedPane,
    windowWidth: state.themeState.windowWidth,
    windowHeight: state.themeState.windowHeight,
    navPaneOpen: state.themeState.navPaneOpen
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