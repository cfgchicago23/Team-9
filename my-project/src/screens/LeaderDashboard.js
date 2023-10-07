import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import ButtonComponent from './button'; // Import the ButtonComponent
import Button from '../components/Button';

const LeaderDashboard = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Student List"
          onPress={() => handleNavigate('StudentList')}
        />
        <Button
          title="Student Progress"
          onPress={() => handleNavigate('StudentProgress')}
        />
        
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default LeaderDashboard;