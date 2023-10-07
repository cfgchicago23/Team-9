import React from 'react';
import { View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

function MyProgressBar({ progress, width, height, color, borderWidth }) {
  return (
    <View>
      <ProgressBar
        progress={progress}
        width={width}
        height={height}
        color={color}
        borderWidth={borderWidth}
      />
    </View>
  );
}

export default MyProgressBar;