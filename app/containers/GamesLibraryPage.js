// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GamesLibraryPageComponent from '../components/GamesLibraryPageComponent';

const mapStateToProps = (state) => {
  return {
    gameShowOn: state.navPaneState.gameShowOn
  }
}

const GamesLibraryPage = connect(
  mapStateToProps
)(GamesLibraryPageComponent)

export default GamesLibraryPage;