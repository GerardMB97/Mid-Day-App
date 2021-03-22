import React from 'react';
import NumericInput from 'react-native-numeric-input';
import colors from '../../../colors';

export default function CustomerSelector ({ customers, setCustomers }) {
  return (
    <NumericInput
        value={customers}
        onChange={(value) => setCustomers(value)}
        onLimitReached={(isMax, msg) => console.log(isMax, msg)}
        minValue={0}
        maxValue={40}
        totalWidth={100}
        totalHeight={30}
        iconSize={25}
        step={1}
        valueType="real"
        rounded
        textColor="black"
        rightButtonBackgroundColor={colors.gray}
        leftButtonBackgroundColor={colors.gray}
      />
  );
}
