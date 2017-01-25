// @flow
import styles from './GridItemComponent.css';

import React from 'react';

import { Label, View, Text } from 'react-desktop/windows';

const GridItemComponent = ({item, selected, onSelectSelf}) => {
  return (
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
  );
}

export default GridItemComponent;