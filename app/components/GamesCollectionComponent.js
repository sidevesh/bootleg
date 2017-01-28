// @flow
import React, { Component } from 'react';
import styles from './GamesCollectionComponent.css';
import GridItemComponent from './GridItemComponent';
import { View } from 'react-desktop/windows';

const GamesCollectionComponent = ({collection, selectedItem, accentColor, onSelect, onDeSelect, onGoToGameShow}) => {
  return (
    <View className={styles.flexgrid}>
      {collection.map(function(game, i){
        return <GridItemComponent item={game} isSelected={selectedItem === i} onDeSelectSelf={ () => {onDeSelect()} } onShowGame={ () => {onGoToGameShow(i)} } onSelectSelf={ () => {onSelect(i)} } accentColor={accentColor} key={i} />;
      })}
    </View>
  );
}

export default GamesCollectionComponent;