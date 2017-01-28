// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameShowComponent from '../components/GameShowComponent';
import { callGameNoShowNav } from '../actions';

const mapStateToProps = (state) => {
  return {
    gameDetails: state.collectionState.items[state.navPaneState.gameShowOn]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToCollection: () => {
      dispatch(callGameNoShowNav());
    }
  }
}

const GameShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameShowComponent)

export default GameShow;