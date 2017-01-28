// @flow
import React, { Component } from 'react';

const GameShowComponent = ({gameDetails, onGoBackToCollection}) => {
  return (
  	<button onClick={() => {onGoBackToCollection()}}>{gameDetails.name}</button>
  );
}

export default GameShowComponent;