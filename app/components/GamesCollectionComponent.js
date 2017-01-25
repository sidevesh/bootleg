// @flow
import React, { Component } from 'react';
import styles from './GamesCollectionComponent.css';
import GridItemComponent from './GridItemComponent';

const GamesCollectionComponent = ({collection, selected, onSelect}) => {
  return (
    <div className={styles.flexgrid}>
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
      <GridItemComponent item={collection[0]} selected={selected} onSelectSelf={ () => {onSelect(0)} } />
    </div>
  );
}

export default GamesCollectionComponent;