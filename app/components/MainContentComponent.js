// @flow
import React, { Component } from 'react';
import { View } from 'react-desktop/windows';

import GamesLibraryPage from '../containers/GamesLibraryPage';
import AddGamePage from '../containers/AddGamePage';
import SettingsPage from '../containers/SettingsPage';

function contentToLoad(selectedPane) {
  switch(selectedPane) {
  case 'Games':
    return <GamesLibraryPage />;
  case 'Add Game':
    return <AddGamePage />;
  case 'Settings':
    return <SettingsPage />;
  }
}

const MainContentComponent = ({selectedPane, windowWidth, windowHeight, navPaneOpen}) => {
  return (
    <View width={navPaneOpen ? windowWidth-20-20-200 : windowWidth-20-20-48 } height={windowHeight-48-10-10-8-8} style={{'overflowX':'hidden', 'overflowY':'auto'}} >
      {contentToLoad(selectedPane)}
    </View>
  );
}

export default MainContentComponent;