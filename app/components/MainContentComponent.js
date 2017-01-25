// @flow
import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';

import GamesLibraryPage from '../containers/GamesLibraryPage';
import AddGamePage from '../containers/AddGamePage';
import SettingsPage from '../containers/SettingsPage';

const MainContentComponent = ({selectedPane}) => {
  switch(selectedPane) {
  case 'Games':
    return <GamesLibraryPage />;
  case 'Add Game':
    return <AddGamePage />;
  case 'Settings':
    return <SettingsPage />;
  }
}

export default MainContentComponent;