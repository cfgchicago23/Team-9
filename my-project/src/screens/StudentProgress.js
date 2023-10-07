//progress bars for each lesson
import React from 'react';
import { View } from 'react-native';
import MyProgressBar from './MyProgressBar';

function App() {
  return (
    <View>
      <body>Lesson 1</body>
      <MyProgressBar progress={0.8} width={200} height={20} color="#E37383" borderWidth={2} />
      <body>Lesson 2</body>
      <MyProgressBar progress={0.5} width={250} height={15} color="#E37383"borderWidth={2} />
      <body>Lesson 3</body>
      <MyProgressBar progress={0.3} width={250} height={15} color="#E37383"borderWidth={2} />
      
    </View>
  );
}

export default App;