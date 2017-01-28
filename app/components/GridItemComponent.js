// @flow
import styles from './GridItemComponent.css';

import React from 'react';

import { Label, View, Text } from 'react-desktop/windows';

const GridItemComponent = ({item, isSelected, accentColor, onSelectSelf, onDeSelectSelf, onShowGame}) => {
  let highlightBorder = (
    <div style={{"width":"190px","height":"290px","border":"5px solid "+accentColor,"position": "relative" ,"bottom":"300px" }}>
    </div>
  );
  let nothingBorder = (
    <div style={{"width":"200px","height":"300px", "position": "relative" ,"bottom":"300px" }}>
    </div>
  );
  return (
    <div style={{"width":"200px","height":"300px", "margin": "5px" }} onClick={() => {onShowGame()}} onMouseEnter={() => { onSelectSelf()} } onMouseLeave={ () => {onDeSelectSelf()} }>
      <View background={item.color}
        layout='vertical'
        width='200px'
        height='300px'
        horizontalAlignment='left'
      >
        <div className={styles.boximgcont}>
          <img src={item.image} className={styles.boximg}/>
        </div>
        <div className={styles.textdetailsbox}>
          <Label color='white'>{item.name}</Label>
          <Text color='white'><em>{item.desc}</em></Text>
        </div>
      </View>
      { isSelected ? highlightBorder : nothingBorder }
    </div>
  );
}

export default GridItemComponent;