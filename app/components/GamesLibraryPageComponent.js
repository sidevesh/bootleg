// @flow
import React, { Component } from 'react';
import GamesCollection from '../containers/GamesCollection';
import GameShow from '../containers/GameShow';

function LibraryOrShow(gameShowOn) {
  if(gameShowOn === -1) {
    return <GamesCollection/>;
  }
  else {
    return <GameShow/>;
  }
}

const GamesLibraryPageComponent = ({gameShowOn}) => {
  return LibraryOrShow(gameShowOn);
}

export default GamesLibraryPageComponent;
