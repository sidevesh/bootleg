import React, { Component } from 'react';
import styles from './Home.css';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';

import MainContent from '../containers/MainContent';

const renderIcon = (iconPath, theme) => {
  return (
    <svg x="0px" y="0px" width="16px" height="16px"  viewBox="0 0 32 32">
      <path
        fill={theme === 'dark' ? '#ffffff' : '#000000'}
        d={iconPath}
      />
    </svg>
  );
}

const renderItem = (title, iconPath, theme, selectedItem, onSelect) => {
  return (
    <NavPaneItem
      title={title}
      icon={renderIcon(iconPath, theme)}
      theme={theme}
      background={theme === 'dark' ? '#000000' : '#ffffff'}
      selected={selectedItem === title}
      onSelect={() => onSelect(title) }
      padding="10px 20px"
      push>
      
      <MainContent />
    </NavPaneItem>
  );
}

const NavBarComponent = ({paneItemsArray, color, theme, selectedPane, onPaneSelect}) => {
  return (
    <NavPane openLength={200} push color={color} theme={theme}>
      {renderItem(paneItemsArray[0].name, paneItemsArray[0].iconPath, theme, selectedPane, onPaneSelect)}
      {renderItem(paneItemsArray[1].name, paneItemsArray[1].iconPath, theme, selectedPane, onPaneSelect)}
      {renderItem(paneItemsArray[2].name, paneItemsArray[2].iconPath, theme, selectedPane, onPaneSelect)}
    </NavPane>
  );
}

export default NavBarComponent;