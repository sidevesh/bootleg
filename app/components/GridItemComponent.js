// @flow
import styles from './GridItemComponent.css';

import React from 'react';

import { Label, View, Text } from 'react-desktop/windows';

const GridItemComponent = ({item, isSelected, accentColor, onSelectSelf}) => {
  let highlightBorder = (
    <div style={{"width":"180px","height":"280px","border":"10px solid "+accentColor,"position": "relative" ,"bottom":"305px", "left":"5px" }}>
    </div>
  );
  let nothingBorder = (
    <div style={{"width":"200px","height":"300px", "position": "relative" ,"bottom":"305px", "left":"5px" }}>
    </div>
  );
  return (
    <div style={{"width":"210px","height":"310px" }} onClick={() => {onSelectSelf()} }>
      <View background={item.color}
        layout='vertical'
        width='200px'
        height='300px'
        horizontalAlignment='left'
        margin='5px 5px'>
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