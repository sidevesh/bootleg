// @flow
import React, { Component } from 'react';
import styles from './GamesCollectionComponent.css';
import GridItemComponent from './GridItemComponent';
import { View } from 'react-desktop/windows';

const GamesCollectionComponent = ({collection, selected, onSelect}) => {
  return (
    <View className={styles.flexgrid}>
      {collection.map(function(game, i){
        return <GridItemComponent item={game} selected={selected === i} onSelectSelf={ () => {onSelect(0)} } key={i} />;
      })}
    </View>
  );
}

export default GamesCollectionComponent;