import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import ButtonComponent from './button'; // Import the ButtonComponent

const LeaderDashboard = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          title="Student List"
          onPress={() => handleNavigate('StudentList')}
        />
        {/* <ButtonComponent
          title="Leader Chat"
          onPress={() => handleNavigate('LeaderChat')}
        /> */}
        {/* <ButtonComponent
          title="International Chat"
          onPress={() => handleNavigate('InternationalChat')}
        />
        <ButtonComponent
          title="Progress"
          onPress={() => handleNavigate('Progress')}
        /> */}
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